/*!
 * L10n.js - Localization (L10n) mapping and information
 * Copyright(c) 2012 Kevin J. Martin
 * MIT Licensed
 *
 * @author Kevin J. Martin
 * @version 0.1.0
 */

/**
 * @class L10n
 */
var L10n = (function () {
	var map, catalog, default_3;

	/**
	 * Constructor
	 *
	 * @constructor
	 * @param {String} lang_3 The 3-letter ISO 639-3 Language Code
	 */
	function L10n (lang_3) {
		this.default(lang_3 || 'eng');
	}

	/**
	 * Change the default ISO 639-3 Language Code
	 *
	 * @method default
	 * @param {String} lang_3 The 3-letter ISO 639-3 Language Code
	 * @return {String} The new (if lang_3 is supplied) or current (if lang_3 is not supplied) Language Code
	 */
	L10n.prototype.default = function (lang_3) {
		lang_3 = (lang_3 + '').toLowerCase();
		return default_3 = (lang_3 || default_3);
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
	 * Example: L10n.info('en_US') // {language: 'English (United States)', locale: 'en_us', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'}
	 *
	 * @method info
	 * @param {String} locale The locale being informed on
	 * @return {Object}
	 */
	L10n.prototype.info = function (locale) {
		locale = (locale + '').toLowerCase().replace(/-/, '_');
		return catalog[locale] ? catalog[locale] :
			(catalog[map[locale]] ? catalog[map[locale]]:
				(catalog[default_3] ? catalog[default_3] :
					(catalog[map[default_3]] ? catalog[map[default_3]] : {})));
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
		'af': {language: 'Afrikaans', locale: 'afr', localeFallback: 'afr', charset: 'utf-8', direction: 'ltr'},
		'ar': {language: 'Arabic', locale: 'ara', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_ae': {language: 'Arabic (U.A.E.)', locale: 'ar_ae', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_bh': {language: 'Arabic (Bahrain)', locale: 'ar_bh', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_dz': {language: 'Arabic (Algeria)', locale: 'ar_dz', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_eg': {language: 'Arabic (Egypt)', locale: 'ar_eg', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_iq': {language: 'Arabic (Iraq)', locale: 'ar_iq', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_jo': {language: 'Arabic (Jordan)', locale: 'ar_jo', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_kw': {language: 'Arabic (Kuwait)', locale: 'ar_kw', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_lb': {language: 'Arabic (Lebanon)', locale: 'ar_lb', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_ly': {language: 'Arabic (Libya)', locale: 'ar_ly', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_ma': {language: 'Arabic (Morocco)', locale: 'ar_ma', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_om': {language: 'Arabic (Oman)', locale: 'ar_om', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_qa': {language: 'Arabic (Qatar)', locale: 'ar_qa', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_sa': {language: 'Arabic (Saudi Arabia)', locale: 'ar_sa', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_sy': {language: 'Arabic (Syria)', locale: 'ar_sy', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_tn': {language: 'Arabic (Tunisia)', locale: 'ar_tn', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'ar_ye': {language: 'Arabic (Yemen)', locale: 'ar_ye', localeFallback: 'ara', charset: 'utf-8', direction: 'rtl'},
		'be': {language: 'Byelorussian', locale: 'bel', localeFallback: 'bel', charset: 'utf-8', direction: 'ltr'},
		'bg': {language: 'Bulgarian', locale: 'bul', localeFallback: 'bul', charset: 'utf-8', direction: 'ltr'},
		'bo': {language: 'Tibetan', locale: 'bod', localeFallback: 'bod', charset: 'utf-8', direction: 'ltr'},
		'bo_cn': {language: 'Tibetan (China)', locale: 'bo_cn', localeFallback: 'bod', charset: 'utf-8', direction: 'ltr'},
		'bo_in': {language: 'Tibetan (India)', locale: 'bo_in', localeFallback: 'bod', charset: 'utf-8', direction: 'ltr'},
		'bs': {language: 'Bosnian', locale: 'bos', localeFallback: 'bos', charset: 'utf-8', direction: 'ltr'},
		'ca': {language: 'Catalan', locale: 'cat', localeFallback: 'cat', charset: 'utf-8', direction: 'ltr'},
		'cs': {language: 'Czech', locale: 'cze', localeFallback: 'cze', charset: 'utf-8', direction: 'ltr'},
		'da': {language: 'Danish', locale: 'dan', localeFallback: 'dan', charset: 'utf-8', direction: 'ltr'},
		'de': {language: 'German (Standard)', locale: 'deu', localeFallback: 'deu', charset: 'utf-8', direction: 'ltr'},
		'de_at': {language: 'German (Austria)', locale: 'de_at', localeFallback: 'deu', charset: 'utf-8', direction: 'ltr'},
		'de_ch': {language: 'German (Swiss)', locale: 'de_ch', localeFallback: 'deu', charset: 'utf-8', direction: 'ltr'},
		'de_de': {language: 'German (Germany)', locale: 'de_de', localeFallback: 'deu', charset: 'utf-8', direction: 'ltr'},
		'de_li': {language: 'German (Liechtenstein)', locale: 'de_li', localeFallback: 'deu', charset: 'utf-8', direction: 'ltr'},
		'de_lu': {language: 'German (Luxembourg)', locale: 'de_lu', localeFallback: 'deu', charset: 'utf-8', direction: 'ltr'},
		'e': {language: 'Greek', locale: 'gre', localeFallback: 'gre', charset: 'utf-8', direction: 'ltr'},
		'el': {language: 'Greek', locale: 'gre', localeFallback: 'gre', charset: 'utf-8', direction: 'ltr'},
		'en': {language: 'English', locale: 'eng', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_au': {language: 'English (Australian)', locale: 'en_au', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_bz': {language: 'English (Belize)', locale: 'en_bz', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_ca': {language: 'English (Canadian)', locale: 'en_ca', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_gb': {language: 'English (British)', locale: 'en_gb', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_ie': {language: 'English (Ireland)', locale: 'en_ie', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_jm': {language: 'English (Jamaica)', locale: 'en_jm', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_nz': {language: 'English (New Zealand)', locale: 'en_nz', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_tt': {language: 'English (Trinidad)', locale: 'en_tt', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_us': {language: 'English (United States)', locale: 'en_us', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'en_za': {language: 'English (South Africa)', locale: 'en_za', localeFallback: 'eng', charset: 'utf-8', direction: 'ltr'},
		'es': {language: 'Spanish (Spain - Traditional)', locale: 'spa', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_ar': {language: 'Spanish (Argentina)', locale: 'es_ar', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_bo': {language: 'Spanish (Bolivia)', locale: 'es_bo', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_cl': {language: 'Spanish (Chile)', locale: 'es_cl', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_co': {language: 'Spanish (Colombia)', locale: 'es_co', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_cr': {language: 'Spanish (Costa Rica)', locale: 'es_cr', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_do': {language: 'Spanish (Dominican Republic)', locale: 'es_do', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_ec': {language: 'Spanish (Ecuador)', locale: 'es_ec', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_es': {language: 'Spanish (Spain)', locale: 'es_es', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_gt': {language: 'Spanish (Guatemala)', locale: 'es_gt', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_hn': {language: 'Spanish (Honduras)', locale: 'es_hn', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_mx': {language: 'Spanish (Mexican)', locale: 'es_mx', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_ni': {language: 'Spanish (Nicaragua)', locale: 'es_ni', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_pa': {language: 'Spanish (Panama)', locale: 'es_pa', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_pe': {language: 'Spanish (Peru)', locale: 'es_pe', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_pr': {language: 'Spanish (Puerto Rico)', locale: 'es_pr', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_py': {language: 'Spanish (Paraguay)', locale: 'es_py', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_sv': {language: 'Spanish (El Salvador)', locale: 'es_sv', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_uy': {language: 'Spanish (Uruguay)', locale: 'es_uy', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'es_ve': {language: 'Spanish (Venezuela)', locale: 'es_ve', localeFallback: 'spa', charset: 'utf-8', direction: 'ltr'},
		'et': {language: 'Estonian', locale: 'est', localeFallback: 'est', charset: 'utf-8', direction: 'ltr'},
		'eu': {language: 'Basque', locale: 'baq', localeFallback: 'baq', charset: 'utf-8', direction: 'ltr'},
		'fa': {language: 'Farsi', locale: 'per', localeFallback: 'per', charset: 'utf-8', direction: 'rtl'},
		'fi': {language: 'Finnish', locale: 'fin', localeFallback: 'fin', charset: 'utf-8', direction: 'ltr'},
		'fo': {language: 'Faeroese', locale: 'fao', localeFallback: 'fao', charset: 'utf-8', direction: 'ltr'},
		'fr': {language: 'French (Standard)', locale: 'fre', localeFallback: 'fre', charset: 'utf-8', direction: 'ltr'},
		'fr_be': {language: 'French (Belgium)', locale: 'fr_be', localeFallback: 'fre', charset: 'utf-8', direction: 'ltr'},
		'fr_ca': {language: 'French (Canadian)', locale: 'fr_ca', localeFallback: 'fre', charset: 'utf-8', direction: 'ltr'},
		'fr_ch': {language: 'French (Swiss)', locale: 'fr_ch', localeFallback: 'fre', charset: 'utf-8', direction: 'ltr'},
		'fr_fr': {language: 'French (France)', locale: 'fr_fr', localeFallback: 'fre', charset: 'utf-8', direction: 'ltr'},
		'fr_lu': {language: 'French (Luxembourg)', locale: 'fr_lu', localeFallback: 'fre', charset: 'utf-8', direction: 'ltr'},
		'ga': {language: 'Irish', locale: 'gle', localeFallback: 'gle', charset: 'utf-8', direction: 'ltr'},
		'gd': {language: 'Gaelic (Scots)', locale: 'gla', localeFallback: 'gla', charset: 'utf-8', direction: 'ltr'},
		'gd_ie': {language: 'Gaelic (Irish)', locale: 'gd_ie', localeFallback: 'gla', charset: 'utf-8', direction: 'ltr'},
		'gl': {language: 'Galician', locale: 'glg', localeFallback: 'glg', charset: 'utf-8', direction: 'ltr'},
		'he': {language: 'Hebrew', locale: 'heb', localeFallback: 'heb', charset: 'utf-8', direction: 'rtl'},
		'hi': {language: 'Hindi', locale: 'hin', localeFallback: 'hin', charset: 'utf-8', direction: 'ltr'},
		'hr': {language: 'Croatian', locale: 'hrv', localeFallback: 'hrv', charset: 'utf-8', direction: 'ltr'},
		'hu': {language: 'Hungarian', locale: 'hun', localeFallback: 'hun', charset: 'utf-8', direction: 'ltr'},
		'hy': {language: 'Armenian - Armenia', locale: 'hye', localeFallback: 'hye', charset: 'utf-8', direction: 'ltr'},
		'id': {language: 'Indonesian', locale: 'ind', localeFallback: 'ind', charset: 'utf-8', direction: 'ltr'},
		'in': {language: 'Indonesian', locale: 'ind', localeFallback: 'ind', charset: 'utf-8', direction: 'ltr'},
		'is': {language: 'Icelandic', locale: 'ice', localeFallback: 'ice', charset: 'utf-8', direction: 'ltr'},
		'it': {language: 'Italian', locale: 'ita', localeFallback: 'ita', charset: 'utf-8', direction: 'ltr'},
		'it_ch': {language: 'Italian (Swiss) ', locale: 'it_ch', localeFallback: 'ita', charset: 'utf-8', direction: 'ltr'},
		'ja': {language: 'Japanese', locale: 'jpn', localeFallback: 'jpn', charset: 'utf-8', direction: 'ltr'},
		'ko': {language: 'Korean', locale: 'kor', localeFallback: 'kor', charset: 'kr', direction: 'ltr'},
		'ko_kp': {language: 'Korea (North)', locale: 'ko_kp', localeFallback: 'kor', charset: 'kr', direction: 'ltr'},
		'ko_kr': {language: 'Korea (South)', locale: 'ko_kr', localeFallback: 'kor', charset: 'kr', direction: 'ltr'},
		'koi8_r': {language: 'Russian', locale: 'koi8_r', localeFallback: 'rus', charset: 'koi8-r', direction: 'ltr'},
		'lt': {language: 'Lithuanian', locale: 'lit', localeFallback: 'lit', charset: 'utf-8', direction: 'ltr'},
		'lv': {language: 'Latvian', locale: 'lav', localeFallback: 'lav', charset: 'utf-8', direction: 'ltr'},
		'mk': {language: 'FYRO Macedonian', locale: 'mk', localeFallback: 'mac', charset: 'utf-8', direction: 'ltr'},
		'mk_mk': {language: 'Macedonian', locale: 'mk_mk', localeFallback: 'mac', charset: 'utf-8', direction: 'ltr'},
		'ms': {language: 'Malaysian', locale: 'may', localeFallback: 'may', charset: 'utf-8', direction: 'ltr'},
		'mt': {language: 'Maltese', locale: 'mlt', localeFallback: 'mlt', charset: 'utf-8', direction: 'ltr'},
		'n': {language: 'Dutch (Standard)', locale: 'dut', localeFallback: 'dut', charset: 'utf-8', direction: 'ltr'},
		'nb': {language: 'Norwegian Bokmal', locale: 'nob', localeFallback: 'nor', charset: 'utf-8', direction: 'ltr'},
		'nl': {language: 'Dutch (Standard)', locale: 'dut', localeFallback: 'dut', charset: 'utf-8', direction: 'ltr'},
		'nl_be': {language: 'Dutch (Belgium)', locale: 'nl_be', localeFallback: 'dut', charset: 'utf-8', direction: 'ltr'},
		'nn': {language: 'Norwegian Nynorsk', locale: 'nno', localeFallback: 'nor', charset: 'utf-8', direction: 'ltr'},
		'no': {language: 'Norwegian', locale: 'nor', localeFallback: 'nor', charset: 'utf-8', direction: 'ltr'},
		'p': {language: 'Polish', locale: 'pol', localeFallback: 'pol', charset: 'utf-8', direction: 'ltr'},
		'pl': {language: 'Polish', locale: 'pol', localeFallback: 'pol', charset: 'utf-8', direction: 'ltr'},
		'pt': {language: 'Portuguese (Portugal)', locale: 'por', localeFallback: 'por', charset: 'utf-8', direction: 'ltr'},
		'pt_br': {language: 'Portuguese (Brazil)', locale: 'pt_br', localeFallback: 'por', charset: 'utf-8', direction: 'ltr'},
		'rm': {language: 'Rhaeto-Romanic', locale: 'roh', localeFallback: 'roh', charset: 'utf-8', direction: 'ltr'},
		'ro': {language: 'Romanian', locale: 'rum', localeFallback: 'rum', charset: 'utf-8', direction: 'ltr'},
		'ro_mo': {language: 'Romanian (Moldavia)', locale: 'ro_mo', localeFallback: 'rum', charset: 'utf-8', direction: 'ltr'},
		'ru': {language: 'Russian', locale: 'rus', localeFallback: 'rus', charset: 'utf-8', direction: 'ltr'},
		'ru_mo': {language: 'Russian (Moldavia)', locale: 'ru_mo', localeFallback: 'rus', charset: 'utf-8', direction: 'ltr'},
		'sb': {language: 'Sorbian', locale: 'wen', localeFallback: 'wen', charset: 'utf-8', direction: 'ltr'},
		'sk': {language: 'Slovak', locale: 'slo', localeFallback: 'slo', charset: 'utf-8', direction: 'ltr'},
		'sl': {language: 'Slovenian', locale: 'slv', localeFallback: 'slv', charset: 'utf-8', direction: 'ltr'},
		'sq': {language: 'Albanian', locale: 'alb', localeFallback: 'alb', charset: 'utf-8', direction: 'ltr'},
		'sr': {language: 'Serbian', locale: 'scc', localeFallback: 'scc', charset: 'utf-8', direction: 'ltr'},
		'sv': {language: 'Swedish', locale: 'swe', localeFallback: 'swe', charset: 'utf-8', direction: 'ltr'},
		'sv_fi': {language: 'Swedish (Finland)', locale: 'sv_fi', localeFallback: 'swe', charset: 'utf-8', direction: 'ltr'},
		'sx': {language: 'Sutu', locale: 'sx', localeFallback: 'sx', charset: 'utf-8', direction: 'ltr'},
		'sz': {language: 'Sami (Lappish)', locale: 'smi', localeFallback: 'smi', charset: 'utf-8', direction: 'ltr'},
		'th': {language: 'Thai', locale: 'tha', localeFallback: 'tha', charset: 'utf-8', direction: 'ltr'},
		'tn': {language: 'Tswana', locale: 'tsn', localeFallback: 'tsn', charset: 'utf-8', direction: 'ltr'},
		'tr': {language: 'Turkish', locale: 'tur', localeFallback: 'tur', charset: 'utf-8', direction: 'ltr'},
		'ts': {language: 'Tsonga', locale: 'tso', localeFallback: 'tso', charset: 'utf-8', direction: 'ltr'},
		'uk': {language: 'Ukrainian', locale: 'ukr', localeFallback: 'ukr', charset: 'utf-8', direction: 'ltr'},
		'ur': {language: 'Urdu', locale: 'urd', localeFallback: 'urd', charset: 'utf-8', direction: 'rtl'},
		've': {language: 'Venda', locale: 'ven', localeFallback: 'ven', charset: 'utf-8', direction: 'ltr'},
		'vi': {language: 'Vietnamese', locale: 'vie', localeFallback: 'vie', charset: 'utf-8', direction: 'ltr'},
		'cy': {language: 'Welsh', locale: 'cym', localeFallback: 'cym', charset: 'utf-8', direction: 'ltr'},
		'xh': {language: 'Xhosa', locale: 'xho', localeFallback: 'xho', charset: 'utf-8', direction: 'ltr'},
		'yi': {language: 'Yiddish', locale: 'yid', localeFallback: 'yid', charset: 'utf-8', direction: 'ltr'},
		'zh': {language: 'Chinese', locale: 'chi', localeFallback: 'chi', charset: 'utf-8', direction: 'ltr'},
		'zh_cn': {language: 'Chinese (PRC)', locale: 'zh_cn', localeFallback: 'chi', charset: 'GB2312', direction: 'ltr'},
		'zh_hk': {language: 'Chinese (Hong Kong)', locale: 'zh_hk', localeFallback: 'chi', charset: 'utf-8', direction: 'ltr'},
		'zh_sg': {language: 'Chinese (Singapore)', locale: 'zh_sg', localeFallback: 'chi', charset: 'utf-8', direction: 'ltr'},
		'zh_tw': {language: 'Chinese (Taiwan)', locale: 'zh_tw', localeFallback: 'chi', charset: 'utf-8', direction: 'ltr'},
		'zu': {language: 'Zulu', locale: 'zul', localeFallback: 'zul', charset: 'utf-8', direction: 'ltr'}
	};

	if (typeof define === "function") {
		define("L10n", [], function () { return L10n; });
	}

	if (typeof define !== "undefined") {
		exports = L10n;
	}

	return L10n;
})();