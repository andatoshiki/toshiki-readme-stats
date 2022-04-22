const numb = require("numbro");
const lang = {
	zhCN: require("numbro/languages/zh-CN"),
	jaJP: require("numbro/languages/ja-JP"),
	enGB: require("numbro/languages/en-GB"),
}

numb.registerLanguage(lang.enGB, true);
numb.registerLanguage(lang.jaJP, true);
numb.registerLanguage(lang.zhCN, true);

function generalFormatter(num) {
	return Math.abs(num) > 999
		? numb(num).format("0.0a", "native")
		: Math.sign(num) * Math.abs(num);
}


const LOCALE = {
	en_US: {
		HEADING: "$[name]'$[apostrophe] GitHub Stats",
		STARS: "Total Stars",
		COMMITS: "Total Commits",
		PRS: "Total PRs",
		ISSUES: "Total Issues",
		CONTRIBS: "Contributed to",
		YEAR_SUFFIX: "",
		NUMBRO: {
			INIT: function() {
				numb.setLanguage("en-US", true);
			},
			doNumberFormat: generalFormatter,
		},
	},
	zh_CN: {
		HEADING: "$[name]的GitHub帐号",
		STARS: "Stars数",
		COMMITS: "Commits数",
		PRS: "PRs数",
		ISSUES: "Issues数",
		CONTRIBS: "Contributed数",
		YEAR_SUFFIX: "年",
		NUMBRO: {
			INIT: function() {
				numb.setLanguage("zh-CN", true);
			},
			doNumberFormat: generalFormatter,
		}
	},
	ja_JP: {
		HEADING: "$[name]のGitHubアカウント",
		STARS: "Stars数",
		COMMITS: "Commits数",
		PRS: "PRs数",
		ISSUES: "Issues数",
		CONTRIBS: "Contributed数",
		YEAR_SUFFIX: "年",
		NUMBRO: {
			INIT: function() {
				numb.setLanguage("ja-JP", true);
			},
			doNumberFormat: generalFormatter,
		}
	},
};


let loc = null;
function setLocale(xloc) {
	loc = LOCALE[xloc] || LOCALE.en;
	loc.NUMBRO.INIT();
}

// default
//setLocale("zh_CN");
setLocale("en_US");
//setLocale("ja_JP");


module.exports = {
	getLocal: function() {
		return loc;
	}
}