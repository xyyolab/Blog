(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{390:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"はじめに"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),a("p",[t._v("Vuepress, Google Domain, Github Pages, Github Actionsを使ってる、ブログ！")]),t._v(" "),a("p",[t._v("全くvuepressとgithub pages無知機の状態で、ここまでできたのは10時間ぐらい、しかもその中6割りはthemeに対するカスタマイズ。元々の状態でもよろしければ、更に早くデプロイできそうだ。")]),t._v(" "),a("p",[t._v("まずは、"),a("a",{attrs:{href:"https://blog.xyyolab.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("成果物"),a("OutboundLink")],1),t._v("💥\n"),a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/ce2736e5-9fbc-fc85-4a4b-820346a24484.png",alt:"Screenshot 2020-03-23 14.52.46.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/6b7ad773-f43c-e6ae-1613-f54b8a5027c5.png",alt:"Screenshot 2020-03-23 14.51.30.png"}})]),t._v(" "),a("p",[t._v("まとめると")]),t._v(" "),a("ul",[a("li",[t._v("Vuepressとthemeをダウンロード")]),t._v(" "),a("li",[t._v("themeのカスタマイズ")]),t._v(" "),a("li",[t._v("以前書いたものの移行")]),t._v(" "),a("li",[t._v("github pages設定、domain設定")]),t._v(" "),a("li",[t._v("github actions設定")]),t._v(" "),a("li",[a("code",[t._v("package.json")]),t._v(" script 追加")])]),t._v(" "),a("h2",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" Vuepress")]),t._v(" "),a("p",[t._v("元々LaravelとVueで書かれたブログは肥大化すぎで、色々調べて、たどり付いたのはVuepress！")]),t._v(" "),a("p",[t._v("Vuepressの特徴")]),t._v(" "),a("ul",[a("li",[t._v("Vueで動く静的ページジェネレーター")]),t._v(" "),a("li",[t._v("markdownで書かれたファイルをhtmlに変換")])]),t._v(" "),a("p",[t._v("VuejsのEcosystemの一環として、今Vuejsに関するドキュメントは全部Vuepressで作られてるみたい。\n"),a("a",{attrs:{href:"https://github.com/vuepressjs/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-vuepress"),a("OutboundLink")],1),t._v("はたくさんの"),a("code",[t._v("plugin")]),t._v("や"),a("code",[t._v("theme")]),t._v("載せている。\nその中に、気にいったのは、人気一位の"),a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"google-domainとgithub-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-domainとgithub-pages"}},[t._v("#")]),t._v(" Google DomainとGithub Pages")]),t._v(" "),a("p",[t._v("Google DomainとGithub pagesのcustom domainについて"),a("a",{attrs:{href:"https://dev.to/trentyang/how-to-setup-google-domain-for-github-pages-1p58",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),a("OutboundLink")],1),t._v("参考した。")]),t._v(" "),a("h2",{attrs:{id:"github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[t._v("#")]),t._v(" Github Actions")]),t._v(" "),a("p",[t._v("Github Actionsに関するものたくさんあるし、ここはGithub Pagesにデプロイだけ説明する。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/6d81c510-7f25-a039-5087-f07854d6d75e.png",alt:"Screenshot 2020-03-23 13.08.05.png"}})]),t._v(" "),a("p",[a("s",[a("code",[t._v("a")]),t._v("➡️"),a("code",[t._v("an")]),t._v("間違ってる、気づいたのはもう遅いわ😵")])]),t._v(" "),a("p",[t._v("Githubのsettingから、"),a("code",[t._v("ACCESS_TOKEN")]),t._v("を取得\n⬇️\n上の図のように、"),a("code",[t._v("ACCESS_TOKEN")]),t._v("などgithubサーバ上に使いたいものを"),a("code",[t._v("Secrets")]),t._v("に保存\n⬇️\nworkflowを書く")]),t._v(" "),a("p",[a("code",[t._v("Vussue")]),t._v("というgithub issue連携のコメントサービスも使うことに、"),a("code",[t._v("Vussue")]),t._v("のkeyも保存。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy GitHub Pages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# once pushed to master branch")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# jobs to build and deploy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy-blog-to-github-page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server env: latest Ubuntu")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pull project")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pass Variables")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pass Variables\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("EXAMPLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.THIS_IS_A_EXAMPLE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("NOTEXIST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.NOTEXIST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo 'try to show secret 😉' && echo $EXAMPLE && echo $NOTEXIST\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build project")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("VSSUEID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.VSSUEID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("VSSUESECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.VSSUESECRET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install && npm run build\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deploy to Github Pages")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n\n\n")])])]),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/e72b8478-89cb-6f45-f406-e6938f81e1c7.png",alt:"Screenshot 2020-03-23 13.11.39.png"}})]),t._v(" "),a("p",[a("code",[t._v("Secrets")]),t._v("に保存したものは***になってる！")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  vssueConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xyyolab'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VSSUEID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VSSUESECRET")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("そして、nodeの"),a("code",[t._v("process.env")]),t._v("で使えるようになる。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/470919/0a508150-59e8-948c-4601-b57012db2ed6.png",alt:"Screenshot 2020-03-23 13.36.35.png"}})]),t._v(" "),a("p",[t._v("コメントも使えるようになった。")]),t._v(" "),a("h2",{attrs:{id:"package-json-script-追加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json-script-追加"}},[t._v("#")]),t._v(" "),a("code",[t._v("package.json")]),t._v(" script 追加")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://blog.xyyolab.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/xyyolab/blog/actions'")]),t._v("\n")])])]),a("p",[t._v("最後にgitの操作も"),a("code",[t._v("package.json")]),t._v("に"),a("code",[t._v("scripts")]),t._v("化して、最終的に"),a("code",[t._v("yarn deploy")]),t._v("だけで、新しいもの書いたら、デプロイできるようになっている。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"残念なところ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#残念なところ"}},[t._v("#")]),t._v(" 残念なところ")]),t._v(" "),a("p",[t._v("VuepressとQiitaのmarkdown文法は微秒な違いがある。今後もしQittaも自動デプロイの一部としてやりたいなら、手動で編集しかないかな。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/xyyolab",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.xyyolab.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("ブログ"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);