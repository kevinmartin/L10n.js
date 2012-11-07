/*!
 * L10n.js - Localization (L10n) mapping and information
 * Copyright(c) 2012 Kevin J. Martin
 * MIT Licensed
 *
 * @author Kevin J. Martin
 * @version 0.2.1
 */

/**
 * @class L10n
 */
var L10n = (function () {
	var map, catalog, current;

	/**
	 * Constructor
	 *
	 * @constructor
	 * @param {String} lang The 3-letter ISO 639-3 Language Code
	 */
	function L10n (lang) {
		this.set(lang || 'eng');
	}

	/**
	 * Change the default Language Code
	 *
	 * @method set
	 * @param {String} lang The 3-letter ISO 639-3 Language Code
	 */
	L10n.prototype.set = function (lang) {
		current = typeof lang === "string" && lang.length ? (lang + '').toLowerCase() : current;
	}

	/**
	 * Get the current Language Code
	 *
	 * @method get
	 * @return {String}
	 */
	L10n.prototype.get = function () {
		return current;
	}

	/**
	 * Map a 3-letter ISO 639-3 Language Code to a 2-letter ISO 639-1 Language Code
	 *
	 * @method map
	 * @param {String} lang_3 The 3-letter ISO 639-3 Language Code
	 * @return {String} 2-letter ISO 639-1 Language Code
	 */
	L10n.prototype.map = function (lang_3) {
		lang_3 = (lang_3 + '').toLowerCase();
		return map[lang_3] ? map[lang_3] : lang_3;
	}

	/**
	 * Return information on a Locale
	 * Example: L10n.info('en_US') // {language: 'English (United States)', fallback: 'eng'}
	 *
	 * @method info
	 * @param {String} locale The locale being informed on
	 * @return {Object}
	 */
	L10n.prototype.info = function (locale) {
		var info;

		locale	= (locale + '').toLowerCase().replace(/-/, '_');
		info	= catalog[locale] ? catalog[locale] :
			(catalog[map[locale]] ? catalog[map[locale]]:
				(catalog[current] ? catalog[current] :
					(catalog[map[current]] ? catalog[map[current]] : {})));

		return {
			language: info.language,
			locale: info.locale || locale,
			fallback: info.fallback,
			charset: info.charset || 'utf-8',
			direction: info.direction || 'ltr'
		};
	}

	/**
	 * @property map
	 * @private
	 */
	map = {
		'afr': 'af', 'alb': 'sq', 'ara': 'ar', 'hye': 'hy', 'baq': 'eu', 'bod': 'bo',
		'bos': 'bs', 'bul': 'bg', 'bel': 'be', 'cat': 'ca', 'chi': 'zh', 'zho': 'zh',
		'hrv': 'hr', 'cze': 'cs', 'ces': 'cs', 'dan': 'da', 'dut': 'nl', 'nld': 'nl',
		'eng': 'en', 'est': 'et', 'fao': 'fo', 'fas': 'fa', 'per': 'fa', 'fin': 'fi',
		'fre': 'fr', 'fra': 'fr', 'gla': 'gd', 'glg': 'gl', 'deu': 'de', 'ger': 'de',
		'gre': 'el', 'ell': 'el', 'heb': 'he', 'hin': 'hi', 'hun': 'hu', 'ice': 'is',
		'isl': 'is', 'ind': 'id', 'gle': 'ga', 'ita': 'it', 'jpn': 'ja', 'kor': 'ko',
		'lav': 'lv', 'lit': 'lt', 'mac': 'mk', 'mkd': 'mk', 'may': 'ms', 'msa': 'ms',
		'mlt': 'mt', 'nor': 'no', 'nob': 'nb', 'nno': 'nn', 'pol': 'pl', 'por': 'pt',
		'roh': 'rm', 'rum': 'ro', 'ron': 'ro', 'rus': 'ru', 'smi': 'sz', 'scc': 'sr',
		'srp': 'sr', 'slo': 'sk', 'slk': 'sk', 'slv': 'sl', 'wen': 'sb', 'spa': 'es',
		'swe': 'sv', 'tha': 'th', 'tso': 'ts', 'tsn': 'tn', 'tur': 'tr', 'ukr': 'uk',
		'urd': 'ur', 'ven': 've', 'vie': 'vi', 'cym': 'cy', 'xho': 'xh', 'yid': 'yi',
		'zul': 'zu'
	};

	/**
	 * @property catalog
	 * @private
	 */
	catalog = {
		'af': {language: 'Afrikaans', locale: 'afr', fallback: 'afr'},
		'ar': {language: 'Arabic', locale: 'ara', fallback: 'ara', direction: 'rtl'},
		'ar_ae': {language: 'Arabic (U.A.E.)', fallback: 'ara', direction: 'rtl'},
		'ar_bh': {language: 'Arabic (Bahrain)', fallback: 'ara', direction: 'rtl'},
		'ar_dz': {language: 'Arabic (Algeria)', fallback: 'ara', direction: 'rtl'},
		'ar_eg': {language: 'Arabic (Egypt)', fallback: 'ara', direction: 'rtl'},
		'ar_iq': {language: 'Arabic (Iraq)', fallback: 'ara', direction: 'rtl'},
		'ar_jo': {language: 'Arabic (Jordan)', fallback: 'ara', direction: 'rtl'},
		'ar_kw': {language: 'Arabic (Kuwait)', fallback: 'ara', direction: 'rtl'},
		'ar_lb': {language: 'Arabic (Lebanon)', fallback: 'ara', direction: 'rtl'},
		'ar_ly': {language: 'Arabic (Libya)', fallback: 'ara', direction: 'rtl'},
		'ar_ma': {language: 'Arabic (Morocco)', fallback: 'ara', direction: 'rtl'},
		'ar_om': {language: 'Arabic (Oman)', fallback: 'ara', direction: 'rtl'},
		'ar_qa': {language: 'Arabic (Qatar)', fallback: 'ara', direction: 'rtl'},
		'ar_sa': {language: 'Arabic (Saudi Arabia)', fallback: 'ara', direction: 'rtl'},
		'ar_sy': {language: 'Arabic (Syria)', fallback: 'ara', direction: 'rtl'},
		'ar_tn': {language: 'Arabic (Tunisia)', fallback: 'ara', direction: 'rtl'},
		'ar_ye': {language: 'Arabic (Yemen)', fallback: 'ara', direction: 'rtl'},
		'be': {language: 'Byelorussian', locale: 'bel', fallback: 'bel'},
		'bg': {language: 'Bulgarian', locale: 'bul', fallback: 'bul'},
		'bo': {language: 'Tibetan', locale: 'bod', fallback: 'bod'},
		'bo_cn': {language: 'Tibetan (China)', fallback: 'bod'},
		'bo_in': {language: 'Tibetan (India)', fallback: 'bod'},
		'bs': {language: 'Bosnian', locale: 'bos', fallback: 'bos'},
		'ca': {language: 'Catalan', locale: 'cat', fallback: 'cat'},
		'cs': {language: 'Czech', locale: 'cze', fallback: 'cze'},
		'da': {language: 'Danish', locale: 'dan', fallback: 'dan'},
		'de': {language: 'German (Standard)', locale: 'deu', fallback: 'deu'},
		'de_at': {language: 'German (Austria)', fallback: 'deu'},
		'de_ch': {language: 'German (Swiss)', fallback: 'deu'},
		'de_de': {language: 'German (Germany)', fallback: 'deu'},
		'de_li': {language: 'German (Liechtenstein)', fallback: 'deu'},
		'de_lu': {language: 'German (Luxembourg)', fallback: 'deu'},
		'e': {language: 'Greek', locale: 'gre', fallback: 'gre'},
		'el': {language: 'Greek', locale: 'gre', fallback: 'gre'},
		'en': {language: 'English', locale: 'eng', fallback: 'eng'},
		'en_au': {language: 'English (Australian)', fallback: 'eng'},
		'en_bz': {language: 'English (Belize)', fallback: 'eng'},
		'en_ca': {language: 'English (Canadian)', fallback: 'eng'},
		'en_gb': {language: 'English (British)', fallback: 'eng'},
		'en_ie': {language: 'English (Ireland)', fallback: 'eng'},
		'en_jm': {language: 'English (Jamaica)', fallback: 'eng'},
		'en_nz': {language: 'English (New Zealand)', fallback: 'eng'},
		'en_tt': {language: 'English (Trinidad)', fallback: 'eng'},
		'en_us': {language: 'English (United States)', fallback: 'eng'},
		'en_za': {language: 'English (South Africa)', fallback: 'eng'},
		'es': {language: 'Spanish (Spain - Traditional)', locale: 'spa', fallback: 'spa'},
		'es_ar': {language: 'Spanish (Argentina)', fallback: 'spa'},
		'es_bo': {language: 'Spanish (Bolivia)', fallback: 'spa'},
		'es_cl': {language: 'Spanish (Chile)', fallback: 'spa'},
		'es_co': {language: 'Spanish (Colombia)', fallback: 'spa'},
		'es_cr': {language: 'Spanish (Costa Rica)', fallback: 'spa'},
		'es_do': {language: 'Spanish (Dominican Republic)', fallback: 'spa'},
		'es_ec': {language: 'Spanish (Ecuador)', fallback: 'spa'},
		'es_es': {language: 'Spanish (Spain)', fallback: 'spa'},
		'es_gt': {language: 'Spanish (Guatemala)', fallback: 'spa'},
		'es_hn': {language: 'Spanish (Honduras)', fallback: 'spa'},
		'es_mx': {language: 'Spanish (Mexican)', fallback: 'spa'},
		'es_ni': {language: 'Spanish (Nicaragua)', fallback: 'spa'},
		'es_pa': {language: 'Spanish (Panama)', fallback: 'spa'},
		'es_pe': {language: 'Spanish (Peru)', fallback: 'spa'},
		'es_pr': {language: 'Spanish (Puerto Rico)', fallback: 'spa'},
		'es_py': {language: 'Spanish (Paraguay)', fallback: 'spa'},
		'es_sv': {language: 'Spanish (El Salvador)', fallback: 'spa'},
		'es_uy': {language: 'Spanish (Uruguay)', fallback: 'spa'},
		'es_ve': {language: 'Spanish (Venezuela)', fallback: 'spa'},
		'et': {language: 'Estonian', locale: 'est', fallback: 'est'},
		'eu': {language: 'Basque', locale: 'baq', fallback: 'baq'},
		'fa': {language: 'Farsi', locale: 'per', fallback: 'per', direction: 'rtl'},
		'fi': {language: 'Finnish', locale: 'fin', fallback: 'fin'},
		'fo': {language: 'Faeroese', locale: 'fao', fallback: 'fao'},
		'fr': {language: 'French (Standard)', locale: 'fre', fallback: 'fre'},
		'fr_be': {language: 'French (Belgium)', fallback: 'fre'},
		'fr_ca': {language: 'French (Canadian)', fallback: 'fre'},
		'fr_ch': {language: 'French (Swiss)', fallback: 'fre'},
		'fr_fr': {language: 'French (France)', fallback: 'fre'},
		'fr_lu': {language: 'French (Luxembourg)', fallback: 'fre'},
		'ga': {language: 'Irish', locale: 'gle', fallback: 'gle'},
		'gd': {language: 'Gaelic (Scots)', locale: 'gla', fallback: 'gla'},
		'gd_ie': {language: 'Gaelic (Irish)', fallback: 'gla'},
		'gl': {language: 'Galician', locale: 'glg', fallback: 'glg'},
		'he': {language: 'Hebrew', locale: 'heb', fallback: 'heb', direction: 'rtl'},
		'hi': {language: 'Hindi', locale: 'hin', fallback: 'hin'},
		'hr': {language: 'Croatian', locale: 'hrv', fallback: 'hrv'},
		'hu': {language: 'Hungarian', locale: 'hun', fallback: 'hun'},
		'hy': {language: 'Armenian - Armenia', locale: 'hye', fallback: 'hye'},
		'id': {language: 'Indonesian', locale: 'ind', fallback: 'ind'},
		'in': {language: 'Indonesian', locale: 'ind', fallback: 'ind'},
		'is': {language: 'Icelandic', locale: 'ice', fallback: 'ice'},
		'it': {language: 'Italian', locale: 'ita', fallback: 'ita'},
		'it_ch': {language: 'Italian (Swiss) ', fallback: 'ita'},
		'ja': {language: 'Japanese', locale: 'jpn', fallback: 'jpn'},
		'ko': {language: 'Korean', locale: 'kor', fallback: 'kor', charset: 'kr'},
		'ko_kp': {language: 'Korea (North)', fallback: 'kor', charset: 'kr'},
		'ko_kr': {language: 'Korea (South)', fallback: 'kor', charset: 'kr'},
		'koi8_r': {language: 'Russian', locale: 'koi8_r', fallback: 'rus', charset: 'koi8-r'},
		'lt': {language: 'Lithuanian', locale: 'lit', fallback: 'lit'},
		'lv': {language: 'Latvian', locale: 'lav', fallback: 'lav'},
		'mk': {language: 'FYRO Macedonian', locale: 'mk', fallback: 'mac'},
		'mk_mk': {language: 'Macedonian', fallback: 'mac'},
		'ms': {language: 'Malaysian', locale: 'may', fallback: 'may'},
		'mt': {language: 'Maltese', locale: 'mlt', fallback: 'mlt'},
		'n': {language: 'Dutch (Standard)', locale: 'dut', fallback: 'dut'},
		'nb': {language: 'Norwegian Bokmal', locale: 'nob', fallback: 'nor'},
		'nl': {language: 'Dutch (Standard)', locale: 'dut', fallback: 'dut'},
		'nl_be': {language: 'Dutch (Belgium)', fallback: 'dut'},
		'nn': {language: 'Norwegian Nynorsk', locale: 'nno', fallback: 'nor'},
		'no': {language: 'Norwegian', locale: 'nor', fallback: 'nor'},
		'p': {language: 'Polish', locale: 'pol', fallback: 'pol'},
		'pl': {language: 'Polish', locale: 'pol', fallback: 'pol'},
		'pt': {language: 'Portuguese (Portugal)', locale: 'por', fallback: 'por'},
		'pt_br': {language: 'Portuguese (Brazil)', fallback: 'por'},
		'rm': {language: 'Rhaeto-Romanic', locale: 'roh', fallback: 'roh'},
		'ro': {language: 'Romanian', locale: 'rum', fallback: 'rum'},
		'ro_mo': {language: 'Romanian (Moldavia)', fallback: 'rum'},
		'ru': {language: 'Russian', locale: 'rus', fallback: 'rus'},
		'ru_mo': {language: 'Russian (Moldavia)', fallback: 'rus'},
		'sb': {language: 'Sorbian', locale: 'wen', fallback: 'wen'},
		'sk': {language: 'Slovak', locale: 'slo', fallback: 'slo'},
		'sl': {language: 'Slovenian', locale: 'slv', fallback: 'slv'},
		'sq': {language: 'Albanian', locale: 'alb', fallback: 'alb'},
		'sr': {language: 'Serbian', locale: 'scc', fallback: 'scc'},
		'sv': {language: 'Swedish', locale: 'swe', fallback: 'swe'},
		'sv_fi': {language: 'Swedish (Finland)', fallback: 'swe'},
		'sx': {language: 'Sutu', locale: 'sx', fallback: 'sx'},
		'sz': {language: 'Sami (Lappish)', locale: 'smi', fallback: 'smi'},
		'th': {language: 'Thai', locale: 'tha', fallback: 'tha'},
		'tn': {language: 'Tswana', locale: 'tsn', fallback: 'tsn'},
		'tr': {language: 'Turkish', locale: 'tur', fallback: 'tur'},
		'ts': {language: 'Tsonga', locale: 'tso', fallback: 'tso'},
		'uk': {language: 'Ukrainian', locale: 'ukr', fallback: 'ukr'},
		'ur': {language: 'Urdu', locale: 'urd', fallback: 'urd', direction: 'rtl'},
		've': {language: 'Venda', locale: 'ven', fallback: 'ven'},
		'vi': {language: 'Vietnamese', locale: 'vie', fallback: 'vie'},
		'cy': {language: 'Welsh', locale: 'cym', fallback: 'cym'},
		'xh': {language: 'Xhosa', locale: 'xho', fallback: 'xho'},
		'yi': {language: 'Yiddish', locale: 'yid', fallback: 'yid'},
		'zh': {language: 'Chinese', locale: 'chi', fallback: 'chi'},
		'zh_cn': {language: 'Chinese (PRC)', fallback: 'chi', charset: 'GB2312'},
		'zh_hk': {language: 'Chinese (Hong Kong)', fallback: 'chi'},
		'zh_sg': {language: 'Chinese (Singapore)', fallback: 'chi'},
		'zh_tw': {language: 'Chinese (Taiwan)', fallback: 'chi'},
		'zu': {language: 'Zulu', locale: 'zul', fallback: 'zul'}
	};

	if (typeof define === "function") {
		define("L10n", [], function () { return L10n; });
	}

	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = L10n;
	}

	return L10n;
})();