(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{470:function(t,e,i){"use strict";i.r(e);var a=i(1),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"常用git命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用git命令"}},[t._v("#")]),t._v(" 常用git命令")]),t._v(" "),e("h3",{attrs:{id:"git-remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-remote"}},[t._v("#")]),t._v(" git remote")]),t._v(" "),e("ul",[e("li",[t._v("git remote：此命令列出本地仓库关联的所有远程仓库的名称。")]),t._v(" "),e("li",[t._v("git remote -v：此选项显示所有远程仓库的 URL，以及它们对应的名称。")]),t._v(" "),e("li",[t._v("git remote add "),e("name",[e("url",[t._v("：该子命令向本地仓库添加一个新的远程仓库。"),e("name",[t._v(" 是您为远程仓库选择的自定义名称，"),e("url",[t._v(" 是远程仓库的 URL。")])],1)],1)],1)],1),t._v(" "),e("li",[t._v("git remote rename "),e("old-name",[e("new-name",[t._v("：该子命令重命名现有的远程仓库。"),e("old-name",[t._v(" 是当前的远程仓库名称，"),e("new-name",[t._v(" 是您要为其指定的新名称。")])],1)],1)],1)],1),t._v(" "),e("li",[t._v("git remote remove "),e("name",[t._v("：该子命令取消本地仓库与远程仓库之间的关联。"),e("name",[t._v(" 是要删除的远程仓库的名称。")])],1)],1),t._v(" "),e("li",[t._v("git remote set-url "),e("name",[e("new-url",[t._v("：该子命令更改现有远程仓库的 URL。"),e("name",[t._v(" 是远程仓库的名称，"),e("new-url",[t._v(" 是要指定的新 URL。")])],1)],1)],1)],1)]),t._v(" "),e("h2",{attrs:{id:"git-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),e("p",[t._v("如何修改最近一次的commit信息: git commit --amend")]),t._v(" "),e("ol",[e("li",[t._v("如果只需要追加修改，而不修改上次提交信息: git commit --amend --no-edit")]),t._v(" "),e("li",[t._v('如果只想修改上次提交信息，而不是追加修改: git commit --amend --only -m "new message"')])]),t._v(" "),e("h2",{attrs:{id:"git-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" git rebase")]),t._v(" "),e("p",[t._v("git rebase -i ba90dc7ff4ab54f9bbb2ca89ddea031fa735c6d2\ngit rebase解决冲突：")]),t._v(" "),e("ol",[e("li",[t._v("git checkout branch_a  git rebase master")]),t._v(" "),e("li",[t._v("手动解决冲突，然后执行git add 或者git rm文件，然后再执行git rebase --contiue继续变基，当然，也可以直接git rebase --skip跳过这个commit，或者使用git rebase --abort放弃rebase。")]),t._v(" "),e("li",[t._v("修改好:wq保存即可\n批量rebase：")]),t._v(" "),e("li",[t._v("git rebase -i ba90dc7ff4ab54f9bbb2ca89ddea031fa735c6d2")]),t._v(" "),e("li",[t._v(":%s/pick /f /g  (😒/old/new/g   将当前行的所有字符串old替换为new)")]),t._v(" "),e("li",[t._v("Ctrl + b 往上滚动一屏幕 找到第一个commit 改成s")])]),t._v(" "),e("h2",{attrs:{id:"git注意点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git注意点"}},[t._v("#")]),t._v(" git注意点")]),t._v(" "),e("ul",[e("li",[t._v("有时即使你本地代码什么都没改，但别人可能把他代码同步到了远程分支，导致远程代码和你本地代码不一致会造成有冲突，git pull拉下来会有很多文件需要commit，可用git reset --hard origin/分支名和远程代码保持同步\ngit")])])])}),[],!1,null,null,null);e.default=r.exports}}]);