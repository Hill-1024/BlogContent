<h1>⬆这是我非常好的朋友们</h1>

:::tip[添加我到你的友链]
:::
<p>
Name:
<text id="Name"
class="items-center justify-center gap-1 px-3 py-2 
    rounded-lg bg-[var(--primary)] text-white 
    hover:bg-[var(--primary)]/90 
    active:scale-95 transition-all duration-200
    font-medium text-sm"
>
Hill
</text>
<button id="nameBtn"
        onclick=copy("Name",id)
        class="copy-link-btn px-3 py-2 rounded-lg
        bg-[var(--btn-regular-bg)]
        hover:bg-[var(--btn-regular-bg-hover)]
        active:scale-95 transition-all duration-200
        text-black/70 dark:text-white/70">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
</button>
</p>

<p>
Avatar:
<text id="Avatar"
class="items-center justify-center gap-1 px-3 py-2 
    rounded-lg bg-[var(--primary)] text-white 
    hover:bg-[var(--primary)]/90 
    active:scale-95 transition-all duration-200
    font-medium text-sm"
>
mutsumi.moe/assets/home/avatar.jpg
</text>
<button id="AvatarBtn"
        onclick=copy("Avatar",id)
        class="copy-link-btn px-3 py-2 rounded-lg
        bg-[var(--btn-regular-bg)]
        hover:bg-[var(--btn-regular-bg-hover)]
        active:scale-95 transition-all duration-200
        text-black/70 dark:text-white/70">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
</button>
</p>

<p>
WebsiteUrl:
<text id="Url"
class="items-center justify-center gap-1 px-3 py-2 
    rounded-lg bg-[var(--primary)] text-white 
    hover:bg-[var(--primary)]/90 
    active:scale-95 transition-all duration-200
    font-medium text-sm"
>
mutsumi.moe
</text>
<button id="UrlBtn"
        onclick=copy("Url",id)
        class="copy-link-btn px-3 py-2 rounded-lg
        bg-[var(--btn-regular-bg)]
        hover:bg-[var(--btn-regular-bg-hover)]
        active:scale-95 transition-all duration-200
        text-black/70 dark:text-white/70">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
</button>
</p>

<p>
Describtion:
<text id="Desc"
class="items-center justify-center gap-1 px-3 py-2 
    rounded-lg bg-[var(--primary)] text-white 
    hover:bg-[var(--primary)]/90 
    active:scale-95 transition-all duration-200
    font-medium text-sm"
>
Just Foward
</text>
<button id="DescBtn"
        onclick=copy("Desc",id)
        class="copy-link-btn px-3 py-2 rounded-lg
        bg-[var(--btn-regular-bg)]
        hover:bg-[var(--btn-regular-bg-hover)]
        active:scale-95 transition-all duration-200
        text-black/70 dark:text-white/70">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
</button>
</p>

<script>
function copy(TextId,btn) {
    let code = document.getElementById(TextId).innerText;
    if(code[0]==='b'){
        code="https://"+code;
    }
    navigator.clipboard.writeText(code).then(() => {
        scucess(btn);
        setInterval(function() {
          back(btn);
        }, 1500);
    }).catch(err => {
       console.error("失败", err);
    });
}
function scucess(id){
    document.getElementById(id).innerHTML="<svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>"
}
function back(id){
    document.getElementById(id).innerHTML="<svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"d=\"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z\"></path></svg>";
}
</script>