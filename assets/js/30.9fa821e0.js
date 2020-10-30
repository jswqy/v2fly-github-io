(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{413:function(t,r,s){"use strict";s.r(r);var a=s(11),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vless"}},[t._v("#")]),t._v(" VLESS")]),t._v(" "),s("ul",[s("li",[t._v("名称："),s("code",[t._v("vless")])]),t._v(" "),s("li",[t._v("类型：入站 / 出站")])]),t._v(" "),s("p",[s("strong",[t._v("当前版本：VLESS PREVIEW 2.5（v2ray-core v4.31.1+）")])]),t._v(" "),s("p",[s("strong",[t._v("终极配置："),s("a",{attrs:{href:"https://github.com/v2fly/v2ray-examples/tree/master/VLESS-TCP-XTLS-WHATEVER",target:"_blank",rel:"noopener noreferrer"}},[t._v("VLESS over TCP with XTLS + 回落 & 分流 to WHATEVER"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("目前 VLESS 没有自带加密，请用于可靠信道，如 TLS。目前 VLESS 不支持分享。"),s("br"),t._v("\nVLESS 处于公测阶段，测试期间请确保客户端与服务端的 v2ray-core 均为最新版本。"),s("br"),t._v("\nVLESS 的内测仓库为 "),s("a",{attrs:{href:"https://github.com/rprx/v2ray-vless",target:"_blank",rel:"noopener noreferrer"}},[t._v("rprx/v2ray-vless"),s("OutboundLink")],1),t._v("，其中 PREVIEW 系列的新版本会在发布一段时间后并入 "),s("a",{attrs:{href:"https://github.com/v2fly/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2fly/v2ray-core"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("p",[t._v("VLESS 是一个无状态的轻量传输协议，它分为入站和出站两部分，可以作为 V2Ray 客户端和服务器之间的桥梁。")]),t._v(" "),s("p",[t._v("与 "),s("RouterLink",{attrs:{to:"/config/protocols/vmess.html"}},[t._v("VMess")]),t._v(" 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId。")],1),t._v(" "),s("p",[t._v("VLESS 的配置分为两部分，"),s("code",[t._v("InboundConfigurationObject")]),t._v(" 和 "),s("code",[t._v("OutboundConfigurationObject")]),t._v("，分别对应入站和出站协议配置中的 "),s("code",[t._v("settings")]),t._v(" 项。")]),t._v(" "),s("h2",{attrs:{id:"outboundconfigurationobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("vnext")]),t._v(": [ "),s("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),s("p",[t._v("一个数组，包含一系列指向服务端的配置。")]),t._v(" "),s("h3",{attrs:{id:"serverobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("address")]),t._v(": address")])]),t._v(" "),s("p",[t._v("地址，指向服务端，支持域名、IPv4、IPv6。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("port")]),t._v(": number")])]),t._v(" "),s("p",[t._v("端口，通常与服务端监听的端口相同。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("users")]),t._v(": [ "),s("a",{attrs:{href:"#userobject"}},[t._v("UserObject")]),t._v(" ]")])]),t._v(" "),s("p",[t._v("一组服务端认可的用户。")]),t._v(" "),s("h3",{attrs:{id:"userobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#userobject"}},[t._v("#")]),t._v(" UserObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("id")]),t._v(": string")])]),t._v(" "),s("p",[t._v("VLESS 的用户 ID，必须是一个合法的 UUID，你可以用 "),s("RouterLink",{attrs:{to:"/awesome/tools.html#在线工具"}},[t._v("在线工具")]),t._v(" 生成它。")],1),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("flow")]),t._v(": string")])]),t._v(" "),s("p",[t._v("v4.29.0+，流控，目前仅用于选择 "),s("a",{attrs:{href:"#xtls-%E9%BB%91%E7%A7%91%E6%8A%80"}},[t._v("XTLS")]),t._v(" 的算法。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("encryption")]),t._v(': "none"')])]),t._v(" "),s("p",[t._v("现阶段需要填 "),s("code",[t._v('"none"')]),t._v("，不能留空。该要求是为了提醒使用者没有加密，也为了以后出加密方式时，防止使用者填错属性名或填错位置导致裸奔。"),s("br"),t._v("\n若未正确设置 encryption 的值，使用 v2ray 或 -test 时会收到错误信息。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("level")]),t._v(": number")])]),t._v(" "),s("p",[t._v("用户等级，详见 "),s("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"inboundconfigurationobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"decryption"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fallbacks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("clients")]),t._v(": [ "),s("a",{attrs:{href:"#clientobject"}},[t._v("ClientObject")]),t._v(" ]")])]),t._v(" "),s("p",[t._v("一组服务端认可的用户。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("decryption")]),t._v(': "none"')])]),t._v(" "),s("p",[t._v("注意这里是 decryption，和 clients 同级。现阶段同样需要填 "),s("code",[t._v('"none"')]),t._v("，不能留空。decryption 和 encryption 的位置不同，是因为若套一层约定加密，服务端需要先解密才能知道是哪个用户。"),s("br"),t._v("\n若未正确设置 decryption 的值，使用 v2ray 或 -test 时会收到错误信息。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("fallbacks")]),t._v(": [ "),s("a",{attrs:{href:"#fallbackobject"}},[t._v("FallbackObject")]),t._v(" ]")])]),t._v(" "),s("p",[t._v("一个数组，包含一系列强大的回落分流配置（可选）。")]),t._v(" "),s("h3",{attrs:{id:"clientobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientobject"}},[t._v("#")]),t._v(" ClientObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("id")]),t._v(": string")])]),t._v(" "),s("p",[t._v("VLESS 的用户 ID，必须是一个合法的 UUID，你也可以用 "),s("RouterLink",{attrs:{to:"/guide/command.html#v2ctl"}},[t._v("V2Ctl")]),t._v(" 生成它。")],1),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("flow")]),t._v(": string")])]),t._v(" "),s("p",[t._v("v4.29.0+，流控，目前仅用于选择 "),s("a",{attrs:{href:"#xtls-%E9%BB%91%E7%A7%91%E6%8A%80"}},[t._v("XTLS")]),t._v(" 的算法。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("level")]),t._v(": number")])]),t._v(" "),s("p",[t._v("用户等级，详见 "),s("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")]),t._v("。")],1),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("email")]),t._v(": string")])]),t._v(" "),s("p",[t._v("用户邮箱，用于区分不同用户的流量（日志、统计）。")]),t._v(" "),s("h2",{attrs:{id:"fallbackobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallbackobject"}},[t._v("#")]),t._v(" FallbackObject")]),t._v(" "),s("p",[s("strong",[t._v("强烈建议使用：基于首包长度分流（VLESS 原创）的新型协议回落模式，相较于其它协议回落方案，更简洁、高效、安全，功能也更强大。")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alpn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"xver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[s("code",[t._v("fallbacks")]),t._v(" 是一个数组（v4.27.2+），这里是其中一个子元素的配置说明，参数不同于以前的 fallback 项。")])]),t._v(" "),s("p",[s("code",[t._v("fallbacks")]),t._v(" 项是可选的，只能用于 TCP+TLS 传输组合。"),s("strong",[t._v("该项有子元素时，"),s("RouterLink",{attrs:{to:"/config/transport.html#tlsobject"}},[t._v("inbound TLS")]),t._v(" 需设置 "),s("code",[t._v('"alpn":["http/1.1"]')]),t._v("。")],1),s("br"),t._v("\n通常，你需要先设置一组 "),s("code",[t._v("alpn")]),t._v(" 和 "),s("code",[t._v("path")]),t._v(" 均省略或为空的默认回落，然后再按需配置其它分流。"),s("br"),t._v("\nVLESS 会把 TLS "),s("strong",[t._v("解密后")]),t._v(" 首包长度 < 18 或协议版本无效、身份认证失败的流量转发到 "),s("code",[t._v("dest")]),t._v(" 指定的地址。"),s("br")]),t._v(" "),s("p",[t._v("其它传输组合必须删掉 "),s("code",[t._v("fallbacks")]),t._v(" 项或所有子元素，此时也不会开启协议回落模式，VLESS 会等待读够所需长度，协议版本无效或身份认证失败时，将直接断开连接。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("alpn")]),t._v(": string")])]),t._v(" "),s("p",[t._v("（新手先忽略）尝试匹配 TLS ALPN "),s("strong",[t._v("协商结果")]),t._v("，空为任意，默认为空。"),s("strong",[t._v("建议只按需用两种填法：省略、填 "),s("code",[t._v('"h2"')]),t._v("。")])]),t._v(" "),s("p",[t._v("智能：有需要时，VLESS 才会尝试读取 TLS ALPN 协商结果，若成功，输出 info "),s("code",[t._v("realAlpn =")]),t._v(" 到日志。"),s("br"),t._v("\n用途：解决了 Nginx 的 h2c 服务不能同时兼容 http/1.1 的问题，Nginx 需要写两行 listen，分别用于 1.1 和 h2c。"),s("br"),t._v("\n注意：fallbacks alpn 存在 "),s("code",[t._v('"h2"')]),t._v(" 时，"),s("RouterLink",{attrs:{to:"/config/transport.html#tlsobject"}},[t._v("inbound TLS")]),t._v(" 需设置 "),s("code",[t._v('"alpn":["h2","http/1.1"]')]),t._v("，以支持 h2 访问。")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v('VLESS fallbacks 设置的 "alpn" 是匹配实际协商出的 ALPN，而 inbound TLS 设置的 "alpn" 是握手时可选的 ALPN 列表，两者含义不同。')])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("path")]),t._v(": string")])]),t._v(" "),s("p",[t._v("（新手先忽略）尝试匹配 "),s("strong",[t._v("首包中的")]),t._v(" HTTP PATH，空为任意，默认为空。"),s("strong",[t._v("非空则必须以 "),s("code",[t._v('"/"')]),t._v(" 开头，不支持 h2c。")])]),t._v(" "),s("p",[t._v("智能：有需要时，VLESS 才会尝试看一眼 PATH（不超过 55 个字节；最快算法，并不完整解析 HTTP），若成功，输出 info "),s("code",[t._v("realPath =")]),t._v(" 到日志。"),s("br"),t._v("\n用途：分流其它 inbound 的 WebSocket 流量或 HTTP 伪装流量，没有多余处理、纯粹转发流量，"),s("a",{attrs:{href:"https://github.com/badO1a5A90/v2ray-doc/blob/master/v2ray%20speed%20test%20v4.27.2.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("实测比 Nginx 反代更强"),s("OutboundLink")],1),t._v("。"),s("br"),t._v("\n注意："),s("strong",[t._v("千万注意 fallbacks 所在入站本身必须是 TCP+TLS")]),t._v("，这是分流至其它 WS 入站用的，被分流的入站则无需配置 TLS 了。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("dest")]),t._v(": string | number")])]),t._v(" "),s("p",[t._v("决定 TLS "),s("strong",[t._v("解密后")]),t._v(" TCP 层流量的去向，目前支持两类地址：（该项必填，否则无法启动）")]),t._v(" "),s("ol",[s("li",[t._v("TCP，格式为 "),s("code",[t._v('"addr:port"')]),t._v("，其中 addr 支持 IPv4、域名、IPv6，若填写域名，也将直接发起 TCP 连接（而不走内置的 DNS）。")]),t._v(" "),s("li",[t._v("Unix domain socket，格式为绝对路径，形如 "),s("code",[t._v('"/dev/shm/domain.socket"')]),t._v("，可在开头加 "),s("code",[t._v('"@"')]),t._v(" 代表 "),s("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("abstract"),s("OutboundLink")],1),t._v("，"),s("code",[t._v('"@@"')]),t._v(" 则代表带 padding 的 abstract。")])]),t._v(" "),s("p",[t._v("若只填 port，数字或字符串均可，形如 "),s("code",[t._v("80")]),t._v("、"),s("code",[t._v('"80"')]),t._v("，通常指向一个明文 http 服务（addr 会被补为 "),s("code",[t._v('"127.0.0.1"')]),t._v("）。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("xver")]),t._v(": number")])]),t._v(" "),s("p",[t._v("（新手先忽略）发送 "),s("a",{attrs:{href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("PROXY protocol"),s("OutboundLink")],1),t._v("，专用于传递请求的真实来源 IP 和端口，填版本 1 或 2，默认为 0，即不发送。若有需要建议填 1。")]),t._v(" "),s("p",[t._v("目前填 1 或 2，功能完全相同，只是结构不同，且前者可打印，后者为二进制。V2Ray 的 TCP 和 WS 入站均已支持接收 PROXY protocol。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("若你正在 "),s("a",{attrs:{href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/#configuring-nginx-to-accept-the-proxy-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 Nginx 接收 PROXY protocol"),s("OutboundLink")],1),t._v("，除了设置 proxy_protocol 外，还需设置 set_real_ip_from，否则可能会出问题。")])]),t._v(" "),s("p",[s("strong",[t._v("补充说明")])]),t._v(" "),s("ol",[s("li",[t._v("将匹配到最精确的子元素，与子元素的排列顺序无关。若配置了几个 alpn 和 path 均相同的子元素，则会以最后的为准。")]),t._v(" "),s("li",[t._v("回落分流均是 "),s("strong",[t._v("解密后")]),t._v(" TCP 层的转发，而不是 HTTP 层，只是有需要时会尝试看一眼 "),s("strong",[t._v("首包中的")]),t._v(" PATH。")]),t._v(" "),s("li",[t._v("暂不支持按域名分流。若有此需求，建议前置 Nginx 等并配置 stream SNI 分流。")])]),t._v(" "),s("h2",{attrs:{id:"xtls-黑科技"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xtls-黑科技"}},[t._v("#")]),t._v(" XTLS 黑科技")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/rprx/v2ray-vless/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("rprx/v2ray-vless/releases"),s("OutboundLink")],1),t._v(" 有关于 "),s("a",{attrs:{href:"https://github.com/XTLS/Go",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTLS Project"),s("OutboundLink")],1),t._v(" 原理的一些介绍。")]),t._v(" "),s("p",[s("strong",[t._v("XTLS 无缝拼接了内外两条货真价实的 TLS，此时代理本身几乎无需再对数据加解密。VLESS + XTLS 可以理解为是增强版 ECH，即多支持身份认证、代理转发、明文加密、UDP over TCP 等。")])]),t._v(" "),s("p",[t._v("XTLS 本身需要是 TLSv1.3（正常情况下的协商结果），内层 TLS 可以为 1.3 或 1.2（上网时的绝大多数流量），此时特殊功能就会生效（填写 flow 是开启/指定特殊功能，生效是另一码事）。")]),t._v(" "),s("p",[s("strong",[t._v("配置方法")])]),t._v(" "),s("ol",[s("li",[t._v("确认服务端与客户端的 v2ray-core 均为 v4.30.0+，并已配置 VLESS over TCP with TLS + 回落 & 可选分流，或者直接参考 "),s("a",{attrs:{href:"https://github.com/v2fly/v2ray-examples/tree/master/VLESS-TCP-XTLS-WHATEVER",target:"_blank",rel:"noopener noreferrer"}},[t._v("终极配置"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[t._v("将服务端与客户端 VLESS streamSettings 的 "),s("code",[t._v("tls")]),t._v("、"),s("code",[t._v("tlsSettings")]),t._v(" 改为 "),s("code",[t._v("xtls")]),t._v("、"),s("code",[t._v("xtlsSettings")]),t._v("（服务端 XTLS 可以接收普通 TLS 请求，也不影响回落分流）。")]),t._v(" "),s("li",[t._v("服务端与客户端的 VLESS flow 均填写 "),s("code",[t._v("xtls-rprx-origin")]),t._v(" 即可，服务端的代表允许，客户端的代表使用（该用户仍可不填 flow、用普通 TLS 连上服务端）。")])]),t._v(" "),s("p",[s("strong",[t._v("注意事项")])]),t._v(" "),s("ol",[s("li",[t._v("为了防止上层应用使用 QUIC，启用 XTLS 时客户端 VLESS 会自动拦截 UDP/443 的请求。若不需拦截，请在客户端填写 "),s("code",[t._v("xtls-rprx-origin-udp443")]),t._v("，服务端不变。")]),t._v(" "),s("li",[t._v("可设置环境变量 "),s("code",[t._v("V2RAY_VLESS_XTLS_SHOW = true")]),t._v(" 以显示 XTLS 的输出，适用于服务端与客户端（仅用于确信 XTLS 生效了，千万别设成永久性的，不然会很卡）。")]),t._v(" "),s("li",[t._v("不能开启 Mux。XTLS 需要获得原始的数据流，所以原理上也不会支持 WebSocket、不适用于 VMess。此外，UDP over TCP 时，VLESS 不会开启 XTLS 的特殊功能。")])]),t._v(" "),s("p",[s("strong",[t._v("性能测试")])]),t._v(" "),s("ol",{attrs:{start:"0"}},[s("li",[s("p",[s("strong",[t._v("2020.10.21 最新补充：")]),t._v(" 发现下面用多台服务器进行模拟测试时，有可能较多的数据未触发 XTLS 的特殊功能（实际使用无此问题），故模拟测试的相关结论暂无参考意义。不过理论上 direct 模式的性能相当于直接 TCP 的数据，即两倍+（有 AES 硬解）；发现有些路由器上性能可以提升到原先的三倍（无 AES 硬解）；根据这两个新的发现，新的综合结论是仅对 v2ray-core 而言，相对于 TLS 的性能，XTLS 在有 AES 硬解的设备上为 200% 上下，在无 AES 硬解的设备上为 300% 上下。由于每个人的硬件环境不同，需要自行测试。另外需要注意，性能提升一定更省资源、稍降延迟，但不一定能转化为网速提升，这取决于速度瓶颈在哪。其实 XTLS 相对于 TLS 的提升并不容易被准确测试，因为会被设备上其它非 core 开销所影响，进程 CPU limit 或许是个比较合适的方式（core 内再细分就无太大意义了）。")])]),t._v(" "),s("li",[s("p",[t._v("XTLS 作为一个特殊的实用性技术，实际测试及模拟测试应当符合它的实用场景，即代理大流量 TLS 数据（16k data record），且最好是独立机器以便观察。若测试方式有误，甚至有可能不如普通 TLS，比如使用 XTLS 且开启它的特殊功能（flow）后只跑非 TLS 数据，会不断产生尝试识别 TLS data record 的开销（v4.31.0+ 已解决此问题）。")])]),t._v(" "),s("li",[s("p",[t._v("目前有两类测试结果：一类是实测在硬路由（无 AES 硬解）上换用 XTLS，一位用户同样跑满 CPU 时网速 "),s("strong",[t._v("翻倍")]),t._v("，另一位用户相同网速时 CPU 使用率减半（AC86U），还有一位用户的树莓派 4B 服务端上也有明显提升，这些反馈均来自 v2fly TG 群。另一类是用多台服务器（有 AES 硬解）和 CPU limit 进行模拟测试，详细的数据、结论等可以看 "),s("a",{attrs:{href:"https://github.com/badO1a5A90/v2ray-doc/tree/master/performance_test/XTLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。暂时可以有这样的综合结论：仅对 v2ray-core 而言，XTLS 目前在无 AES 硬解的设备上可以提升 100% 左右，在有 AES 硬解的设备上可以提升 50% 左右。一般来说，设备性能越弱、TLS 流量越大，XTLS 带来的提升就会越明显。而对于移动设备，计算量减少实测更 "),s("strong",[t._v("省电")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("根据上面的测试，XTLS 现在的 "),s("code",[t._v("xtls-rprx-origin")]),t._v(" 算法仍有很大提升空间，也会继续优化（主要是接收方行为）。XTLS 以后还会推出其它的算法，进一步减少计算量。"),s("br"),t._v("\nv4.31.0+，XTLS 新增 Direct 模式 "),s("code",[t._v("xtls-rprx-direct")]),t._v("、"),s("code",[t._v("xtls-rprx-direct-udp443")]),t._v("，理论上拥有接近 XTLS 极限的性能，它与 Origin 的不同之处详见 "),s("a",{attrs:{href:"https://github.com/rprx/v2ray-vless/releases/tag/preview2.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")])])]),t._v(" "),s("h2",{attrs:{id:"一些说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些说明"}},[t._v("#")]),t._v(" 一些说明")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/v2fly/v2ray-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2ray-examples"),s("OutboundLink")],1),t._v(" 有完整的 VLESS 配置示例供参考。（但目前不能保证其它协议的配置示例质量）")]),t._v(" "),s("p",[t._v("VLESS 和 VMess 的日志策略不同，遇到了异常情况，前者通常是 Warning，后者通常是 Info。（v4.31.1+，VLESS 大部分日志策略已调整为与 VMess 相同）")]),t._v(" "),s("p",[t._v("待补充")]),t._v(" "),s("h2",{attrs:{id:"新型协议回落模式解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新型协议回落模式解析"}},[t._v("#")]),t._v(" 新型协议回落模式解析")]),t._v(" "),s("p",[t._v("待补充")]),t._v(" "),s("h2",{attrs:{id:"客户端指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端指引"}},[t._v("#")]),t._v(" 客户端指引")]),t._v(" "),s("ol",[s("li",[t._v("VLESS 协议本身还会有不兼容升级，但客户端配置文件参数基本上是只增不减的。"),s("strong",[t._v("所以如果你开发了用 core 的客户端，现在就可以适配。")]),t._v(" iOS 客户端的协议实现则需紧跟升级。")]),t._v(" "),s("li",[s("strong",[t._v("视觉标准：UI 标识请统一用 VLESS")]),t._v("，而不是 VLess / Vless / vless，配置文件不受影响，代码内则顺其自然。")]),t._v(" "),s("li",[s("code",[t._v("encryption")]),t._v(" 应做成输入框而不是选择框，新配置的默认值应为 "),s("code",[t._v("none")]),t._v("，若用户置空则应代填 "),s("code",[t._v("none")]),t._v("。"),s("code",[t._v("flow")]),t._v(" 也应做成输入框，新配置的默认值应为空。")])]),t._v(" "),s("p",[s("strong",[t._v("以下为已支持图形化配置 VLESS 的部分客户端列表，推荐使用：")]),t._v("（按实现时间先后顺序排列）")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qv2ray"),s("OutboundLink")],1),t._v("（v2.6.3+），支持 Linux、macOS、Windows")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/2dust/v2rayN",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayN"),s("OutboundLink")],1),t._v("（v3.21+），支持 Windows")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/2dust/v2rayNG",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayNG"),s("OutboundLink")],1),t._v("（v1.3.0+），支持 Android")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/xiaorouji/openwrt-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("PassWall"),s("OutboundLink")],1),t._v("（v3.9.35+），支持 OpenWrt")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mzz2017/v2rayA",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayA"),s("OutboundLink")],1),t._v("（v1.0.0+），支持 Linux")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/yanue/V2rayU",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayU"),s("OutboundLink")],1),t._v("（v3.0.0+），支持 macOS")])]),t._v(" "),s("h2",{attrs:{id:"vless-分享链接标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vless-分享链接标准"}},[t._v("#")]),t._v(" VLESS 分享链接标准")]),t._v(" "),s("p",[t._v("v2ray-core v4.28.0 会增强 TLS，"),s("s",[t._v("VLESS 的分享链接标准也会同时出炉")]),t._v("。为了避免生态混乱，在此之前请勿支持分享，更勿自创分享链接方案。")]),t._v(" "),s("p",[t._v("更新：经过综合考虑，VLESS 应于正式版再出分享链接标准（不是近期）。")])])}),[],!1,null,null,null);r.default=e.exports}}]);