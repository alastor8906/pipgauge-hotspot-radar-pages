const state = {
  payload: null,
  periods: [],
  data: null,
  selectedDate: null,
  view: "today",
  site: "all",
  minimumScore: 72,
  query: "",
};

const scoreDimensions = [
  ["新鲜度", "freshness", 25],
  ["流量", "traffic_potential", 25],
  ["贴合度", "calculator_fit", 25],
  ["证据", "evidence_quality", 15],
  ["可执行", "actionability", 10],
];

const statusLabels = {
  observation: "观察",
  discarded: "淘汰",
};

const coverageLabels = {
  complete: "完整",
  partial: "部分",
  limited: "受限",
  not_run: "未运行",
};

const contentStatusLabels = {
  draft_ready: "草稿已完成",
};

const executionModeLabels = {
  new: "新建内容",
  refresh: "更新旧稿",
  hold: "暂不创作",
};

const urgencyLabels = {
  high: "高时效",
  medium: "中时效",
  low: "低时效",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTimestamp(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Shanghai",
  }).format(new Date(value));
}

function candidateMatches(candidate) {
  const query = state.query.trim().toLowerCase();
  const playbook = candidate.traffic_playbook || {};
  const haystack = [
    candidate.topic,
    candidate.reason,
    candidate.primary_site,
    ...candidate.calculator_mapping,
    playbook.traffic_hook,
    playbook.traffic_angle,
    playbook.calculator_bridge,
    ...(playbook.search_intents || []),
  ].join(" ").toLowerCase();
  return (
    candidate.status === "selected" &&
    (state.site === "all" || candidate.primary_site === state.site) &&
    candidate.total_score >= state.minimumScore &&
    (!query || haystack.includes(query))
  );
}

function playbookCard(candidate, index) {
  const playbook = candidate.traffic_playbook;
  if (!playbook) return "";
  const searchIntents = (playbook.search_intents || [])
    .map((item) => `<span class="intent-chip">${escapeHtml(item)}</span>`)
    .join("");
  const channels = (playbook.distribution_order || [])
    .map((item, channelIndex) => `<span><b>${channelIndex + 1}</b>${escapeHtml(item)}</span>`)
    .join("");
  return `
    <article class="playbook-card">
      <div class="playbook-head">
        <div>
          <div class="topic-meta">
            <span class="site-badge${candidate.primary_site === "PositionMath" ? " is-secondary" : ""}">${escapeHtml(candidate.primary_site)}</span>
            <span class="strategy-badge ${escapeHtml(playbook.execution_mode)}">${escapeHtml(executionModeLabels[playbook.execution_mode] || playbook.execution_mode)}</span>
            <span class="urgency-badge ${escapeHtml(playbook.urgency || "medium")}">${escapeHtml(urgencyLabels[playbook.urgency] || "时效待定")}</span>
          </div>
          <h3>${index + 1}. ${escapeHtml(candidate.topic)}</h3>
        </div>
        <div class="deadline-block">
          <span>最迟窗口</span>
          <strong>${escapeHtml(playbook.publish_deadline || "待判断")}</strong>
        </div>
      </div>

      <div class="playbook-lead">
        <span>借势角度</span>
        <strong>${escapeHtml(playbook.traffic_angle)}</strong>
      </div>

      <div class="playbook-grid">
        <div class="playbook-field">
          <span>热点钩子</span>
          <p>${escapeHtml(playbook.traffic_hook)}</p>
        </div>
        <div class="playbook-field">
          <span>抢量窗口</span>
          <p>${escapeHtml(playbook.traffic_window)}</p>
        </div>
        <div class="playbook-field is-wide">
          <span>用户会搜</span>
          <div class="intent-list">${searchIntents}</div>
        </div>
        <div class="playbook-field">
          <span>计算器承接</span>
          <p>${escapeHtml(playbook.calculator_bridge)}</p>
        </div>
        <div class="playbook-field">
          <span>建议示例</span>
          <p>${escapeHtml(playbook.example_scenario)}</p>
        </div>
      </div>

      <div class="distribution-row">
        <span class="field-label">分发顺序</span>
        <div class="distribution-steps">${channels}</div>
      </div>

      <details class="playbook-details">
        <summary>执行边界与停止条件</summary>
        <div>
          <p><b>链接位置：</b>${escapeHtml(playbook.link_placement)}</p>
          <p><b>停止条件：</b>${escapeHtml(playbook.expiry_condition)}</p>
          <p><b>编辑边界：</b>${escapeHtml(playbook.editorial_boundary)}</p>
        </div>
      </details>
    </article>`;
}

function renderPlaybooks() {
  const selected = state.data.candidates.filter((item) => item.status === "selected");
  const withPlaybooks = selected.filter((item) => item.traffic_playbook);
  const emptyMessage = selected.length === 0
    ? "本期没有合格选题，因此不生成热点流量打法。"
    : "本期入选项尚未建立热点流量打法，不能直接进入创作。";
  document.querySelector("#playbook-list").innerHTML = withPlaybooks.length
    ? withPlaybooks.map(playbookCard).join("")
    : `<div class="empty-state">${emptyMessage}</div>`;
}

function scorePart(label, key, maximum, candidate) {
  const value = candidate[key];
  const width = Math.round((value / maximum) * 100);
  return `
    <div class="score-part">
      <span>${label} ${value}/${maximum}</span>
      <div class="mini-track"><i style="width:${width}%"></i></div>
    </div>`;
}

function topicCard(candidate, index) {
  const chips = candidate.calculator_mapping
    .map((item) => `<span class="mapping-chip">${escapeHtml(item)}</span>`)
    .join("");
  const secondaryClass = candidate.primary_site === "PositionMath" ? " is-secondary" : "";
  const contentEntry = candidate.content_url ? `
      <div class="content-row">
        <span class="content-state ${escapeHtml(candidate.content_status || "")}">
          <i data-lucide="file-check-2" aria-hidden="true"></i>
          ${escapeHtml(candidate.content_label || contentStatusLabels[candidate.content_status] || "内容待处理")}
        </span>
        <span class="content-format">${escapeHtml(candidate.content_format || "")}</span>
        <a class="content-button" href="${escapeHtml(candidate.content_url)}" target="_blank" rel="noopener">
          打开内容 <i data-lucide="arrow-up-right" aria-hidden="true"></i>
        </a>
      </div>` : "";
  return `
    <article class="topic-card">
      <div class="topic-head">
        <div class="topic-title-wrap">
          <div class="topic-meta">
            <span class="site-badge${secondaryClass}">${escapeHtml(candidate.primary_site)}</span>
            <span class="mapping-chip">#${index + 1}</span>
            <span class="mapping-chip">${candidate.reliable_sources} 个可靠来源</span>
          </div>
          <h3>${escapeHtml(candidate.topic)}</h3>
        </div>
        <div class="score-box" aria-label="总分 ${candidate.total_score}">
          <strong>${candidate.total_score}</strong>
          <span>总分</span>
        </div>
      </div>
      <p class="topic-reason">${escapeHtml(candidate.reason)}</p>
      <div class="mapping-list">${chips}</div>
      ${contentEntry}
      <div class="score-breakdown">
        ${scoreDimensions.map(([label, key, max]) => scorePart(label, key, max, candidate)).join("")}
      </div>
    </article>`;
}

function renderTopics() {
  const selected = state.data.candidates.filter(candidateMatches);
  document.querySelector("#filtered-count").textContent = `${selected.length} 条`;
  const emptyMessage = state.data.stats.selected === 0
    ? "本期没有达到质量门槛的选题。这是有效结果，不补题、不硬写。"
    : "当前筛选条件下没有合格选题。";
  document.querySelector("#topic-list").innerHTML = selected.length
    ? selected.map(topicCard).join("")
    : `<div class="empty-state">${emptyMessage}</div>`;
}

function renderWatchlist() {
  const candidates = state.data.candidates.filter((item) => item.status !== "selected");
  document.querySelector("#watchlist-body").innerHTML = candidates.length ? candidates.map((candidate) => `
    <tr>
      <td><span class="status-badge ${candidate.status}">${statusLabels[candidate.status]}</span></td>
      <td>${escapeHtml(candidate.topic)}</td>
      <td>${escapeHtml(candidate.primary_site)}</td>
      <td><strong>${candidate.total_score}</strong></td>
      <td>${escapeHtml(candidate.reason)}</td>
    </tr>`).join("") : `<tr><td colspan="5">本期没有观察或淘汰项。</td></tr>`;
}

function renderCoverage() {
  document.querySelector("#coverage-list").innerHTML = state.data.coverage.map((item) => `
    <div class="coverage-row">
      <span class="coverage-indicator ${item.status}" aria-hidden="true"></span>
      <div class="coverage-copy">
        <strong>${escapeHtml(item.channel)}</strong>
        <span>${escapeHtml(item.note)}</span>
      </div>
      <span class="coverage-status">${coverageLabels[item.status]}</span>
    </div>`).join("");
}

function renderDocuments() {
  const labels = {
    daily_report: "打开完整日报",
    raw_scan: "查看原始扫描",
    retrospective: "查看运行记录",
    rules: "查看雷达规则",
    ledger: "下载候选台账",
    traffic_playbooks: "查看热点流量打法数据",
  };
  document.querySelector("#document-links").innerHTML = Object.entries(labels)
    .filter(([key]) => state.data.links[key])
    .map(([key, label]) => `
    <a class="document-link" href="${escapeHtml(state.data.links[key])}" target="_blank" rel="noopener">
      <span>${label}</span><i data-lucide="arrow-up-right" aria-hidden="true"></i>
    </a>`).join("");
}

function renderPeriodOptions() {
  const select = document.querySelector("#period-select");
  select.innerHTML = state.periods.map((period) => `
    <option value="${escapeHtml(period.scan_date)}">${escapeHtml(period.scan_date)}</option>`).join("");
  select.value = state.selectedDate;
}

function renderSummary() {
  const { stats, pilot, scan_date: scanDate, generated_at: generatedAt } = state.data;
  document.querySelector("#metric-selected").textContent = stats.selected;
  document.querySelector("#metric-observation").textContent = stats.observation;
  document.querySelector("#metric-average").textContent = stats.selected_average;
  document.querySelector("#metric-gate").textContent = stats.selected === 0
    ? "无合格项"
    : (stats.all_selected_pass_gate ? "通过" : "需复核");
  document.querySelector("#metric-content").textContent = `${stats.content_ready}/${stats.selected}`;
  document.querySelector("#metric-playbook").textContent = `${stats.playbook_ready}/${stats.selected}`;
  document.querySelector("#metric-pilot").textContent = `第 ${pilot.day} / ${pilot.total_days} 天`;
  document.querySelector("#pilot-fill").style.width = `${Math.min(100, pilot.day / pilot.total_days * 100)}%`;
  document.querySelector("#run-label").textContent = `当前期次 ${scanDate}`;
  document.querySelector("#generated-at").textContent = `数据生成于 ${formatTimestamp(generatedAt)}`;
  document.querySelector("#footer-date").textContent = `阈值 ${pilot.threshold} 分 · ${pilot.schedule} CST`;
  const top = state.data.candidates.find((item) => item.status === "selected");
  document.querySelector("#top-pick").textContent = top ? top.topic : "本期无合格选题，不补题";
  document.querySelector("#content-ready").textContent = stats.selected === 0
    ? "无合格选题，不生成内容包"
    : (stats.content_ready
      ? `${stats.content_ready} 个内容包已完成，可逐篇审稿`
      : "本期尚未建立内容包");
}

function activateView(view) {
  state.view = view;
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".view-panel").forEach((panel) => {
    const active = panel.id === `view-${view}`;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function render() {
  renderSummary();
  renderTopics();
  renderPlaybooks();
  renderWatchlist();
  renderCoverage();
  renderDocuments();
  refreshIcons();
}

async function loadData() {
  const response = await fetch(`./data.json?ts=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load data: ${response.status}`);
  state.payload = await response.json();
  state.periods = Array.isArray(state.payload.periods) && state.payload.periods.length
    ? state.payload.periods
    : [state.payload];
  const preservedPeriod = state.periods.find((period) => period.scan_date === state.selectedDate);
  state.data = preservedPeriod || state.periods[0];
  state.selectedDate = state.data.scan_date;
  renderPeriodOptions();
  render();
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => activateView(button.dataset.view));
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.site = button.dataset.site;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
    renderTopics();
  });
});

document.querySelector("#topic-search").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderTopics();
});

document.querySelector("#score-filter").addEventListener("input", (event) => {
  state.minimumScore = Number(event.target.value);
  document.querySelector("#score-value").textContent = state.minimumScore;
  renderTopics();
});

document.querySelector("#period-select").addEventListener("change", (event) => {
  const period = state.periods.find((item) => item.scan_date === event.target.value);
  if (!period) return;
  state.selectedDate = period.scan_date;
  state.data = period;
  render();
});

document.querySelector("#refresh-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  button.classList.add("is-loading");
  try {
    await loadData();
  } finally {
    button.classList.remove("is-loading");
  }
});

loadData().catch((error) => {
  document.querySelector("#topic-list").innerHTML = `<div class="empty-state">数据载入失败：${escapeHtml(error.message)}</div>`;
});
