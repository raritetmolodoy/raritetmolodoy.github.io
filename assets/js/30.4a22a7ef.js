(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{387:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"установка-push-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#установка-push-notifications"}},[t._v("#")]),t._v(" Установка Push-notifications")]),t._v(" "),a("p",[t._v("Для работы с пушами мы используем Firebase Cloud Messaging")]),t._v(" "),a("p",[t._v("Дока для работы с Google Firebase через PHP: "),a("code",[t._v("https://firebase-php.readthedocs.io/en/5.8.1/")])]),t._v(" "),a("ol",[a("li",[t._v("Установить a Laravel package for the Firebase PHP Admin SDK: "),a("code",[t._v("composer require kreait/laravel-firebase")]),t._v(", дока к пакету: "),a("code",[t._v("https://github.com/kreait/laravel-firebase")])]),t._v(" "),a("li",[t._v("Добавить в провайдеры сервис провайдер:")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/app.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'providers'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        Kreait\\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Firebase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Сгенерить и скачать приватный ключ firebase "),a("code",[t._v("https://firebase.google.com/docs/admin/setup#initialize_the_sdk")])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("ВНИМАНИЕ")]),t._v(" "),a("p",[t._v("Приватный ключ не должен храниться в репозитории, только прямиком на прод сервере.\nДля тестирования лучше сгенерить тестовый приватный ключ для стейдж сервера")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("Закинуть путь к приватному ключу в .env :\nFIREBASE_CREDENTIALS=relative/path/to/firebase_credentials.json")])]),t._v(" "),a("li",[a("p",[t._v('Опубликовать конфиг:\nphp artisan vendor:publish --provider="Kreait\\Laravel\\Firebase\\ServiceProvider" --tag=config')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);