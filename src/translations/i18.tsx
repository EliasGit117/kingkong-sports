import i18next from "i18next";
import commonEn from "./en/common.json";
import commonRu from "./ru/common.json";
import commonRo from "./ro/common.json";
import headerEn from "./en/header.json";
import headerRo from "./ro/header.json";
import headerRu from "./ru/header.json";
import XHR from "i18next-http-backend";
import LanguageDetector, {DetectorOptions} from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const getLanguage = (value: string): string => {
	switch (value) {
		case "en":
		case "en-EN":
			return "en";

		case "ru":
		case "ru-RU":
			return "ru";

		case "ro":
		case "ro-RO":
			return "ro";

		default:
			return "en";
	}
}

const resources = {
	en: { common: commonEn, header: headerEn },
	ru: { common: commonRu, header: headerRu },
	ro: { common: commonRo, header: headerRo }
};

const DETECTION_OPTIONS: DetectorOptions = {
	order: ['localStorage', 'navigator'],
	caches: ['localStorage'],
	lookupLocalStorage: 'i18nextLng',
};

const i18 = i18next;

i18
	.use(XHR)
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		detection: DETECTION_OPTIONS,
		supportedLngs: ['en', 'ru', 'ro'],
		lng: localStorage.getItem("i18nextLng") || getLanguage(navigator.language) || "en",
		interpolation: { escapeValue: false },  // React already does escaping
	});

export default i18;
