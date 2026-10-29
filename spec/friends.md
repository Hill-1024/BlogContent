
<div class="not-prose my-8 w-full overflow-hidden rounded-[var(--radius-large)] bg-[var(--license-block-bg)]">
<div class="p-5 sm:p-6">
<div class="relative mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 pl-4 before:absolute before:left-0 before:top-[0.45em] before:h-4 before:w-1 before:rounded-md before:bg-[var(--primary)]">
<span class="text-lg font-bold text-90">我的友链名片</span>
<span class="text-sm text-50">欢迎与我交换友链</span>
</div>
<div class="flex items-center gap-4">
<img src="https://mutsumi.moe/assets/home/avatar.jpg" alt="Hill" class="h-16 w-16 shrink-0 rounded-2xl object-cover sm:h-20 sm:w-20">
<div class="min-w-0 flex-1">
<div class="flex items-center gap-2">
<span class="truncate text-xl font-bold text-90">Hill</span>
<span class="shrink-0 rounded-full bg-[var(--primary)]/10 px-2 py-0.5 text-[11px] font-medium leading-none text-[var(--primary)]">友链</span>
</div>
<p class="mt-1 truncate text-sm text-50">Just Forward</p>
</div>
<a href="https://mutsumi.moe" target="_blank" rel="noopener noreferrer" aria-label="访问我的博客" title="访问我的博客" class="btn-regular h-9 shrink-0 gap-1.5 rounded-lg px-3 text-sm font-medium">
<iconify-icon icon="material-symbols:open-in-new-rounded" width="16" height="16"></iconify-icon>
<span>访问</span>
</a>
</div>
</div>
<div class="flex flex-col gap-0.5 px-3 pb-3">
<div class="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--btn-plain-bg-hover)]">
<span class="w-12 shrink-0 text-xs font-medium tracking-wide text-30">名称</span>
<span id="friend-name" class="min-w-0 flex-1 select-all truncate text-sm text-90">Hill</span>
<button type="button" data-copy-target="friend-name" aria-label="复制名称" title="复制名称" class="btn-plain h-8 w-8 shrink-0 rounded-md text-30">
<iconify-icon icon="material-symbols:content-copy-rounded" width="16" height="16"></iconify-icon>
</button>
</div>
<div class="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--btn-plain-bg-hover)]">
<span class="w-12 shrink-0 text-xs font-medium tracking-wide text-30">头像</span>
<span id="friend-avatar" class="min-w-0 flex-1 select-all truncate text-[13px] text-90 [font-family:var(--code-font-family)]">https://mutsumi.moe/assets/home/avatar.jpg</span>
<button type="button" data-copy-target="friend-avatar" aria-label="复制头像链接" title="复制头像链接" class="btn-plain h-8 w-8 shrink-0 rounded-md text-30">
<iconify-icon icon="material-symbols:content-copy-rounded" width="16" height="16"></iconify-icon>
</button>
</div>
<div class="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--btn-plain-bg-hover)]">
<span class="w-12 shrink-0 text-xs font-medium tracking-wide text-30">网址</span>
<span id="friend-url" class="min-w-0 flex-1 select-all truncate text-[13px] text-90 [font-family:var(--code-font-family)]">https://mutsumi.moe</span>
<button type="button" data-copy-target="friend-url" aria-label="复制博客链接" title="复制博客链接" class="btn-plain h-8 w-8 shrink-0 rounded-md text-30">
<iconify-icon icon="material-symbols:content-copy-rounded" width="16" height="16"></iconify-icon>
</button>
</div>
<div class="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--btn-plain-bg-hover)]">
<span class="w-12 shrink-0 text-xs font-medium tracking-wide text-30">简介</span>
<span id="friend-desc" class="min-w-0 flex-1 select-all truncate text-sm text-90">Just Forward</span>
<button type="button" data-copy-target="friend-desc" aria-label="复制简介" title="复制简介" class="btn-plain h-8 w-8 shrink-0 rounded-md text-30">
<iconify-icon icon="material-symbols:content-copy-rounded" width="16" height="16"></iconify-icon>
</button>
</div>
</div>
</div>

<script>
(() => {
const COPY_ICON = '<iconify-icon icon="material-symbols:content-copy-rounded" width="16" height="16"></iconify-icon>';
const CHECK_ICON = '<iconify-icon icon="material-symbols:check-rounded" width="16" height="16" style="color: var(--primary)"></iconify-icon>';

async function writeClipboard(text) {
try {
await navigator.clipboard.writeText(text);
} catch {
const area = document.createElement("textarea");
area.value = text;
area.style.position = "fixed";
area.style.opacity = "0";
document.body.appendChild(area);
area.select();
document.execCommand("copy");
area.remove();
}
}

// 事件委托 + 全局守卫：Swup 无刷新切换时不会重复绑定
if (!window.__friendCardCopyBound) {
window.__friendCardCopyBound = true;
document.addEventListener("click", async (event) => {
const button = event.target.closest("[data-copy-target]");
if (!button) return;
const target = document.getElementById(button.dataset.copyTarget);
if (!target) return;
await writeClipboard(target.textContent.trim());
button.innerHTML = CHECK_ICON;
clearTimeout(button.__copyTimer);
button.__copyTimer = setTimeout(() => {
button.innerHTML = COPY_ICON;
}, 1600);
});
}
})();
</script>
