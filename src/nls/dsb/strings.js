/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(zmólka {0})",
    "NOT_FOUND_ERR": "Dataja/zarědnik njedajo se namakaś.",
    "NOT_READABLE_ERR": "Dataja/zapis njedajo se cytaś.",
    "EXCEEDS_MAX_FILE_SIZE": "Dataje, kótarež su wětše ako {0} MB njedaju se w {APP_NAME} wócyniś.",
    "FILE_EXISTS_ERR": "Dataja abo zarědnik južo eksistěrujo.",
    "FILE": "dataja",
    "FILE_TITLE": "Dataja",
    "DIRECTORY": "zarědnik",
    "DIRECTORY_TITLE": "Zarědnik",
    "DIRECTORY_NAMES_LEDE": "Mjenja zarědnikow",
    "FILENAMES_LEDE": "Datajowe mjenja",
    "FILENAME": "Datajowe mě",
    "DIRECTORY_NAME": "Mě zarědnika",
    "ERROR_OUT_OF_SPACE_TITLE": "Limit projektoweje wjelikosći jo dostany",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Cełkowna wjelikosć datajow we wašom projekśe jo maksimum k dispoziciji stojecego ruma pśekšocył. Njamóžośo dalšne dataje pśidaś, až někotare z eksistěrujucych datajow njewulašuju, aby wy składowański rum napórał.",
    "FILE_EXISTS_HEADER": "Dataja južo eksistěrujo.",
    "OPEN_DIALOG_ERROR": "Pśi pokazowanju dialoga wócynjanja datajow jo zmólka nastała. (zmólka {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Pśi cytanju wopśimjeśa zarědnika <span class='dialog-filename'>{0}</span> jo zmólka nastała. (zmólka {1})",
    "ERROR_OPENING_FILE_TITLE": "Zmólka pśi wócynjanju dataje",
    "ERROR_OPENING_FILE": "Pśi wopyśe dataju <span class='dialog-filename'>{0}</span> wócyniś, jo zmólka nastała. {1}",
    "ERROR_OPENING_FILES": "Pśi wopyśe slědujuce dataje wócyniś, jo zmólka nastała:",
    "ERROR_SAVING_FILE_TITLE": "Zmólka pśi składowanju dataje",
    "ERROR_SAVING_FILE": "Pśi wopyśe dataju <span class='dialog-filename'>{0}</span> składowaś, jo zmólka nastała. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Zmólka pśi pśemjenjowanju dataje",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Zmólka pśi pśemjenjowanju zarědnika",
    "ERROR_RENAMING_FILE": "Pśi wopyśe dataju <span class='dialog-filename'>{0}</span> pśemjeniś, jo zmólka nastała. {1}",
    "ERROR_RENAMING_DIRECTORY": "Pśi wopyśe zapis <span class='dialog-filename'>{0}</span> pśemjeniś, jo zmólka nastała. {1}",
    "ERROR_DELETING_FILE_TITLE": "Zmólka pśi lašowanju dataje",
    "ERROR_DELETING_DIRECTORY_TITLE": "Zmólka pśi lašowanju zarědnika",
    "ERROR_DELETING_FILE": "Pśi wopyśe dataju <span class='dialog-filename'>{0}</span> lašowaś, jo zmólka nastała. {1}",
    "ERROR_DELETING_DIRECTORY": "Pśi wopyśe zarědnik <span class='dialog-filename'>{0}</span> lašowaś, jo zmólka nastała. {1}",
    "INVALID_FILENAME_TITLE": "Njepłaśiwe datajowe mě",
    "INVALID_DIRNAME_TITLE": "Njepłaśiwe zarědnikowe mě",
    "INVALID_FILENAME_MESSAGE": "Datajowe mjenja njesměju rezerwěrowane systemowe słowa wužywaś, se z dypkami (.) kóńcyś abo slědujuce znamuška wužywaś: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Zarědnikowe mjenja njesměju rezerwěrowane systemowe słowa wužywaś, se z dypkami (.) kóńcyś abo slědujuce znamuška wužywaś: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Dataja abo zarědnik z mjenim <span class='dialog-filename'>{0}</span> južo eksistěrujo.",
    "ERROR_CREATING_FILE_TITLE": "Zmólka pśi napóranju dataje",
    "ERROR_CREATING_DIRECTORY_TITLE": "Zmólka pśi napóranju zarědnika",
    "ERROR_CREATING_FILE": "Pśi wopyśe dataju <span class='dialog-filename'>{1}</span> napóraś, jo zmólka nastała. {2}",
    "ERROR_CREATING_DIRECTORY": "Pśi wopyśe zarědnik <span class='dialog-filename'>{1}</span> napóraś, jo zmólka nastała. {2}",
    "ERROR_MAX_FILES_TITLE": "Zmólka pśi indicěrowanju datajow",
    "EXT_MODIFIED_TITLE": "Wenkowne změny",
    "EXT_MODIFIED_WARNING": "Dataja <span class='dialog-filename'>{0}</span> jo se na plaśe zwenka {APP_NAME} změniła.<br /><br />Cośo dataju składowaś a te změny pśepisowaś?",
    "EXT_MODIFIED_MESSAGE": "Dataja <span class='dialog-filename'>{0}</span> jo se na plaśei zwenka {APP_NAME} změniła, ale su teke njeskłaźone změny w {APP_NAME}.<br /><br />Kótaru wersiju cośo zachowaś?",
    "EXT_DELETED_MESSAGE": "Dataja <span class='dialog-filename'>{0}</span> jo se na plaśe zwenka {APP_NAME} změniła, ale su teke njeskłaźone změny w {APP_NAME}.<br /><br />Kótaru wersiju cośo zachowaś?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Lašowanje wobkšuśiś",
    "CONFIRM_FOLDER_DELETE": "Cośo napšawdu zarědnik <span class='dialog-filename'>{0}</span> lašowaś?",
    "CONFIRM_FILE_DELETE": "Cośo napšawdu <span class='dialog-filename'>{0}</span> lašowaś?",
    "FILE_DELETED_TITLE": "Dataja jo se wulašowała",
    "DONE": "Dokóńcone",
    "OK": "W pórěźe",
    "CANCEL": "Pśetergnuś",
    "SAVE_AND_OVERWRITE": "Pśepisaś",
    "DELETE": "Lašowaś",
    "BUTTON_YES": "Jo",
    "BUTTON_NO": "Ně",
    "USE_IMPORTED": "Nowu dataju wužywaś",
    "KEEP_EXISTING": "Eksistěrujucu dataju wobchowaś",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Žedna spěšna změna za aktualnu kursorowu poziciji k dispoziciji",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Spěšna změna CSS: Placěrujśo kursor nad mjenim jadnotliweje klase",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Spěšna změna CSS: Njedopołny klasowy atribut",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Spěšna změna CSS: Njedopołny atribut ID",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Spěšna změna CSS: placěrujśo kursor w elemenśe, klasy abo ID",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Spěšna změna casoweje funkcije CSS: Njepłaśiwa syntaksa",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "Spěšna změna JS: Placěrujśo kursor w funkciskem mjenju",
    "BUTTON_NEW_RULE": "Nowe pšawidło",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Žeden Quick Docs ta aktualnu kursorowu poziciju k dispoziciji",
    "CMD_FILE_NEW": "Nowa dataja",
    "CMD_FILE_NEW_FOLDER": "Nowy zarědnik",
    "CMD_FILE_RENAME": "Pśemjeniś",
    "CMD_FILE_DELETE": "Lašowaś",
    "CMD_FILE_DOWNLOAD": "Ześěgnuś",
    "CMD_CUT": "Wurězaś",
    "CMD_COPY": "Kopěrowaś",
    "CMD_PASTE": "Zasajźiś",
    "CMD_SELECT_ALL": "Wšykno wubraś",
    "CMD_TOGGLE_QUICK_EDIT": "Spěšna změna",
    "CMD_TOGGLE_QUICK_DOCS": "Quick Docs",
    "DND_MAX_SIZE_EXCEEDED": "dataja pśekšaca maksimalnu pódpěranu wjelikosć: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "njepódpěrany datajowy typ",
    "DND_ERROR_UNZIP": "zip-dataja njedajo se wupakowaś",
    "DND_ERROR_UNTAR": "tar-dataja njedajo se wupakowaś",
    "DND_SUCCESS_UNZIP_TITLE": "Zip-dataja jo se wuspěšnje wupakowała",
    "DND_SUCCESS_UNTAR_TITLE": "Tar-dataja jo se wuspěšnje wupakowała",
    "DND_FILE_REPLACE": "Dataja z mjenim <span class='dialog-filename'>{0}</span> južo eksistěrujo. Cośo nowu dataju wužywaś abo eksistěrujucu wobchowaś?",
    "IMAGE_FILE_TITLE": "Wobrazowa dataja",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} pikselow",
    "IMAGE_ALT_TEXT": "Wobrazowe wopisanje",
    "IMAGE_FILTERS_TITLE": "Wobrazowy filter",
    "IMAGE_FILTER_PINHOLE": "Źěrkata blenda",
    "IMAGE_FILTER_SEPIA": "Sepija",
    "IMAGE_FILTER_CONTRAST": "Kontrast",
    "IMAGE_FILTER_VINTAGE": "Klasiski",
    "IMAGE_FILTER_SUNRISE": "Zejźenje słyńca",
    "IMAGE_FILTER_EMBOSS": "Pregowaś",
    "IMAGE_FILTER_GLOWING_SUN": "Swěśeca słyńca",
    "IMAGE_SAVE_WITH_FILTERS": "Nałožyś",
    "IMAGE_RESET_FILTERS": "Pśetergnuś",
    "FONT_FILE": "Pismowa dataja",
    "USE_FONT_INSTRUCTIONS": "Aby toś to pismo wužywał, kopěrujśo toś ten kod do swójeje CSS-dataje.",
    "FONT_TYPE_BOLD": "Tucny",
    "FONT_TYPE_ITALIC": "Kursiwny",
    "FONT_BOLD_HTML_TAG": "Stajśo tekst do wobznamjenja <code>&lt;strong&gt;&lt;/strong&gt;</code>.",
    "FONT_BOLD_CSS_RULE": "Pśidajśo CSS-pšawidło <code>font-weight:bold;</code>.",
    "FONT_ITALIC_HTML_TAG": "Stajśo tekst do wobznamjenja <code>&lt;em&gt;&lt;/em&gt;</code>.",
    "FONT_ITALIC_CSS_RULE": "Pśidajśo CSS-pšawidło <code>font-weight:italic;</code>.",
    "VIDEO_FILE": "Wideodataja",
    "VIDEO_OPTIONS": "Wideonastajenja",
    "VIDEO_CODE_SAMPLE": "Kopěrujśo toś ten kod, aby toś to wideo do HTML-boka zasajźił",
    "VIDEO_OPTION_SHOW_CONTROLS": "Wóźeńske elementy wideo pokazaś",
    "VIDEO_OPTION_AUTOPLAY": "Wideo awtomatiski wótgraś",
    "VIDEO_OPTION_LOOPING": "Wideo znowego startowaś, gaž jo dowótgrate",
    "VIDEO_OPTION_DISABLE_AUDIO": "Awdio znjemóžniś",
    "AUDIO_FILE": "Awdiodataja",
    "AUDIO_OPTIONS": "Awdionastajenja",
    "AUDIO_OPTION_SHOW_CONTROLS": "Awdioelementy pokazaś (gaž awdiowótgrawak jo njewidobny)",
    "AUDIO_OPTION_AUTOPLAY": "Awdio awtomatiski wótgrawaś",
    "AUDIO_OPTION_LOOPING": "Awdio znowego startowaś, gaž jo dowótgrate",
    "AUDIO_OPTION_DISABLE_AUDIO": "Awdiowótgrawak bźez zuka startowaś",
    "BINARY_FILE_TITLE": "Njewobźěłujobna dataja",
    "BINARY_FILE_CANNOT_EDIT": "Thimble njewě, kak se ma toś ta dataja wobźěłaś!",
    "BINARY_FILE_OPTIONS_TITLE": "Ale móžośo...",
    "BINARY_FILE_DOWNLOAD": "Ju ześěgnuś",
    "BINARY_FILE_OPEN": "Ju w nowem rejtarku wócyniś",
    "BINARY_FILE_TRY_EDIT": "Wopytowaś, ju wobźěłaś",
    "PDF_FILE_TITLE": "PDF-dataja",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Aktualna barwa",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Originalna barwa",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "Format RGBa",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Heksadecimalny format",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "Format HSLa",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1} raz wužyty)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1} razow wužyte)",
    "CMD_JUMPTO_DEFINITION": "K definiciji skócyś",
    "CMD_SHOW_PARAMETER_HINT": "Parametrowy pokaz pokazaś",
    "NO_ARGUMENTS": "<žedne parametry>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript: Problem datajoweje inference",
    "CMD_ENABLE_QUICK_VIEW": "Spěšny pśeglěd pśi pokazowanju z myšku",
    "DOCS_MORE_LINK": "Wěcej cytaś",
    "UPLOAD_FILES_DIALOG_HEADER": "Dataje nagraś",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...abo dataje sem śěgnuś.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "W pórěźe, dataje wózjawiś!",
    "UPLOADING_INDICATOR": "Nagrawa so...",
    "BUTTON_FROM_YOUR_COMPUTER": "Z wašogo licadła...",
    "TAKE_A_SELFIE": "Selfie cyniś...",
    "CMD_MOVE_FILE": "Pśesunuś do...",
    "PROJECT_ROOT": "Kórjenjowy zarědnik projekta",
    "PICK_A_FOLDER_TO_MOVE_TO": "Zarědnik wubraś",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Zmólka pśi pśesuwanju",
    "UNEXPECTED_ERROR_MOVING_FILE": "Pśi přesuwanju dataje/zarědnika {0} do {1} jo njewótčakana zmólka nastała",
    "ERROR_MOVING_FILE_SAME_NAME": "Dataja abo zarědnik z mjenim {0} w {1} južo eksistěrujo. Pśemjeńśo pšosym jadnu dataju abo jaden zarědnik z njeju, aby pókšacował.",
    "CONSOLE_TITLE": "Konsola",
    "CONSOLE_TOOLTIP": "Konsolu JavaScript wócyniś",
    "CONSOLE_CLEAR": "Wuprozniś",
    "CONSOLE_CLEAR_TOOLTIP": "Konsolu wuprozniś",
    "CONSOLE_CLOSE_TOOLTIP": "Konsolu zacyniś",
    "CONSOLE_EMPTY_STRING": "Prozny znamuškowy rjeśazk",
    "CONSOLE_HELPTEXT": "Aby konsolu wužywał, pśidajśo <code>console.log(&quot;Witaj swět!&quot;);</code> do swójeje dataje javaScript."
});
