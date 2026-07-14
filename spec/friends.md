<h2>这些是我常来往的朋友</h2>

:::tip[添加我到你的友链]
欢迎与我交换友链
:::

<div class="not-prose my-6 w-full border border-black/10 dark:border-white/10 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-black/[0.01] to-black/[0.04] dark:from-white/[0.01] dark:to-white/[0.04] shadow-sm">
<!-- 顶栏：头像和简介预览 -->
<div class="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-6">
<img src="https://mutsumi.moe/assets/home/avatar.jpg" alt="Avatar" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md object-cover border-2 border-white dark:border-white/10">
<div class="flex-1 text-center sm:text-left space-y-1">
<h3 class="text-xl font-bold m-0 text-black/90 dark:text-white/90">Hill</h3>
<p class="text-sm text-black/60 dark:text-white/60 m-0">Just Forward</p>
</div>
</div>
<!-- 复制列表 -->
<div class="flex flex-col gap-3">
<!-- 姓名 -->
<div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
<div class="flex items-center gap-3 overflow-hidden">
<span class="text-sm font-bold text-black/50 dark:text-white/50 w-16 shrink-0 tracking-wider">名称</span>
<span id="friend-name" class="text-sm font-medium px-2 py-1 rounded bg-[var(--primary)] text-white select-all truncate">Hill</span>
</div>
<button type="button" onclick="copyText('friend-name', this)" class="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--btn-regular-bg)] hover:bg-[var(--btn-regular-bg-hover)] active:scale-95 transition-all duration-200 text-black/70 dark:text-white/70" aria-label="复制名称" title="复制名称">
<iconify-icon icon="material-symbols:content-copy-rounded" width="18" height="18"></iconify-icon>
</button>
</div>
<!-- 头像 -->
<div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
<div class="flex items-center gap-3 overflow-hidden">
<span class="text-sm font-bold text-black/50 dark:text-white/50 w-16 shrink-0 tracking-wider">头像</span>
<span id="friend-avatar" class="text-sm font-medium px-2 py-1 rounded bg-[var(--primary)] text-white select-all truncate">https://mutsumi.moe/assets/home/avatar.jpg</span>
</div>
<button type="button" onclick="copyText('friend-avatar', this)" class="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--btn-regular-bg)] hover:bg-[var(--btn-regular-bg-hover)] active:scale-95 transition-all duration-200 text-black/70 dark:text-white/70" aria-label="复制头像链接" title="复制头像链接">
<iconify-icon icon="material-symbols:content-copy-rounded" width="18" height="18"></iconify-icon>
</button>
</div>
<!-- 网址 -->
<div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
<div class="flex items-center gap-3 overflow-hidden">
<span class="text-sm font-bold text-black/50 dark:text-white/50 w-16 shrink-0 tracking-wider">网址</span>
<span id="friend-url" class="text-sm font-medium px-2 py-1 rounded bg-[var(--primary)] text-white select-all truncate">https://mutsumi.moe</span>
</div>
<button type="button" onclick="copyText('friend-url', this)" class="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--btn-regular-bg)] hover:bg-[var(--btn-regular-bg-hover)] active:scale-95 transition-all duration-200 text-black/70 dark:text-white/70" aria-label="复制博客链接" title="复制博客链接">
<iconify-icon icon="material-symbols:content-copy-rounded" width="18" height="18"></iconify-icon>
</button>
</div>
<!-- 简介 -->
<div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
<div class="flex items-center gap-3 overflow-hidden">
<span class="text-sm font-bold text-black/50 dark:text-white/50 w-16 shrink-0 tracking-wider">简介</span>
<span id="friend-desc" class="text-sm font-medium px-2 py-1 rounded bg-[var(--primary)] text-white select-all truncate">Just Forward</span>
</div>
<button type="button" onclick="copyText('friend-desc', this)" class="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--btn-regular-bg)] hover:bg-[var(--btn-regular-bg-hover)] active:scale-95 transition-all duration-200 text-black/70 dark:text-white/70" aria-label="复制简介" title="复制简介">
<iconify-icon icon="material-symbols:content-copy-rounded" width="18" height="18"></iconify-icon>
</button>
</div>
</div>
</div>

<script>
function copyText(elementId, btn) {
const text = document.getElementById(elementId).innerText;
navigator.clipboard.writeText(text).then(function() {
const originalHTML = btn.innerHTML;
btn.innerHTML = '<iconify-icon icon="material-symbols:check-rounded" width="20" height="20" class="text-green-600 dark:text-green-400"></iconify-icon>';
setTimeout(function() {
btn.innerHTML = originalHTML;
}, 2000);
}).catch(function(err) {
console.error("copy failed", err);
const originalHTML = btn.innerHTML;
btn.innerHTML = '<iconify-icon icon="material-symbols:close-rounded" width="20" height="20" class="text-red-500"></iconify-icon>';
setTimeout(function() {
btn.innerHTML = originalHTML;
}, 2000);
});
}
</script>
