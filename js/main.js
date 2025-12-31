// Language translations
const translations = {
    en: {
        nav: {
            home: "Home",
            floorplan: "Floor Plan",
            tour: "3D Tour",
            history: "History",
            images: "Images",
            about: "About"
        },
        hero: {
            subtitle: "A digital record of the school's history, architecture, and events from<br><strong>1979</strong> to <strong>1990</strong>"
        },
        floorplan: {
            title: "Approximate Floor Plan (1979 - 1986)",
            note: "Created by the author from memory - no original floor plan available.",
            aerialNote: "The floor plan was recreated using this aerial image from Bing Maps and measurements derived from it."
        },
        history: {
            title: "History",
            timeline: "Garnedd Timeline",
            timelineSubtitle: "Demographic illustration by the author of this website",
            thesisTitle: "The Establishment of Welsh-Medium Education in Bangor: From St. Paul to Y Garnedd",
            thesisSubtitle: "From Bebb's 1976 Thesis",
            thesisPara1: "In his 1976 University of Wales thesis, \"Lle Sefydlu Ysgol Gynradd Gymraeg Bangor yn Natblygiadau Addysgol Cymru 1650-1953\" (The Place of Establishing Bangor Welsh Primary School in the Educational Developments of Wales 1650-1953), Hywel Bebb documented the centuries-long struggle for Welsh-medium education and the establishment of the first Welsh-medium primary school in Bangor.",
            thesisPara2: "Bebb's research revealed a striking paradox in 1950s Bangor: while approximately 79% of the town's population spoke Welsh (8,486 Welsh speakers out of 12,151 people in 1951), the vast majority of Welsh-speaking children were being educated entirely through English. This linguistic and cultural disconnect became increasingly concerning to parents and educators who recognized the vital importance of education through the mother tongue.",
            birthTitle: "The Birth of Welsh-Medium Education: 1953",
            birthPara1: "Following meetings throughout 1952 and early 1953, led by key figures including Mrs. Eluned Bebb and supported by the educational philosophy of W. Ambrose Bebb, the Caernarfonshire Education Committee made a historic decision. In June 1953, they voted to convert Ysgol St. Paul into a Welsh-medium junior school—the first of its kind in Bangor's modern history.",
            birthPara2: "Ysgol St. Paul was selected specifically because it had low pupil numbers, which meant the transition could happen with minimal disruption to Bangor's education system. The newly established \"Ysgol Gymraeg\" (Welsh School) opened on 1st February 1953 with 37 pupils. Parents of children already attending St. Paul were circularized and asked whether they wished their children to continue when it became a Welsh School. The school grew steadily: by 1955 there were 72 pupils, and by 1975 the number had reached 242 children.",
            moveTitle: "The Move to Y Garnedd: 1975",
            movePara: "As the Welsh school continued to grow, it eventually outgrew the St. Paul building. In 1975, the school moved to a new purpose-built facility and was renamed Ysgol Y Garnedd—the school that would serve the community until its demolition in recent years, when a new modern Ysgol Y Garnedd was opened to continue the legacy.",
            significanceTitle: "The Broader Significance",
            significancePara: "Bebb's thesis places this development within three centuries of Welsh educational history, from the \"Brad y Llyfrau Gleision\" (Treachery of the Blue Books) in 1847 through to the Welsh-medium school movement of the mid-20th century. The establishment of the Welsh school in Bangor was more than just a local achievement—it represented the culmination of generations of struggle to establish Welsh as a legitimate language of education and a vital step in ensuring the survival of Welsh language and culture for future generations.",
            timelineTitle: "Timeline:",
            timeline1953: "Ysgol St. Paul converted to Welsh-medium \"Ysgol Gymraeg\" (37 pupils)",
            timeline1955: "School grown to 242 pupils",
            timeline1975a: "School grown to 242 pupils",
            timeline1975b: "Moved to new building, renamed Ysgol Y Garnedd",
            timeline2021: "Original Ysgol Y Garnedd building demolished",
            timeline2020: "New Ysgol Y Garnedd opened",
            thesisNote: "This summary is based on H.M. Bebb's 1976 thesis held at Bangor University.",
            fireNote: "Two reported fires at the school: one around 1990 in the music room adjacent to the school hall, and another in 2015. Reference: <a href='https://www.northwalesfire.gov.wales/news/2015/6/22/spate-of-deliberate-fires-in-bangor-area-prompts-safety-warning/' target='_blank'>North Wales Fire Service, June 2015</a>."
        },
        tour: {
            title: "3D Tour",
            placeholder: "3D tour content will be displayed here",
            loading: "Loading 3D model...",
            navTitle: "🎮 Navigation Controls",
            navClick: "Click on the window first to activate controls",
            navKeys: "keys to move",
            navMouse: "Move your mouse to look around",
            bandwidthWarning: "Large Download",
            bandwidthText: "This 3D tour requires downloading ~540MB of data. On slower connections, this may take several minutes.",
            cancelButton: "Cancel Loading",
            blenderDescription: "The 3D model was created in Blender using the recreated floor plan. While simplified, it captures the key elements of the school including the classrooms, Octagon Room, Hall, and overall structure. The model will be refined further as time permits."
        },
        images: {
            title: "Images"
        },
        about: {
            title: "About",
            content: "Information about Ysgol Y Garnedd and this project will appear here."
        }
    },
    cy: {
        nav: {
            home: "Hafan",
            floorplan: "Cynllun Llawr",
            tour: "Taith 3D",
            history: "Hanes",
            images: "Lluniau",
            about: "Amdanom"
        },
        hero: {
            subtitle: "Cofnod digidol o hanes, strwythur a digwyddiadau'r ysgol o<br><strong>1979</strong> i <strong>1990</strong>"
        },
        floorplan: {
            title: "Cynllun Llawr Bras (1979 - 1986)",
            note: "Crëwyd hwn gan yr awdur o'r cof (dim cynllun gwreiddiol ar gael).",
            aerialNote: "Ailgrëwyd y cynllun llawr gan ddefnyddio'r llun o'r awyr hwn o Bing Maps a mesuriadau a ddeilliwyd ohono."
        },
        history: {
            title: "Hanes",
            timeline: "Llinell Amser Garnedd",
            timelineSubtitle: "Effaith demograffeg dros amser gan yr awdur",
            thesisTitle: "Sefydlu Addysg Cyfrwng Cymraeg ym Mangor: O St. Paul i Y Garnedd",
            thesisSubtitle: "O Draethawd Bebb 1976",
            thesisPara1: "Yn ei draethawd Prifysgol Cymru 1976, \"Lle Sefydlu Ysgol Gynradd Gymraeg Bangor yn Natblygiadau Addysgol Cymru 1650-1953\", cofnododd Hywel Bebb yr ymdrech ganrifoedd hir dros addysg cyfrwng Cymraeg a sefydlu ysgol gynradd Gymraeg gyntaf ym Mangor.",
            thesisPara2: "Datgelodd ymchwil Bebb baradocs trawiadol ym Mangor y 1950au: er bod tua 79% o boblogaeth y dref yn siarad Cymraeg (8,486 o siaradwyr Cymraeg allan o 12,151 o bobl yn 1951), roedd y mwyafrif helaeth o blant Cymraeg eu hiaith yn cael eu haddysgu yn gyfan gwbl trwy'r Saesneg. Daeth yr anghydwedd ieithyddol a diwylliannol hwn yn fwyfwy pryderus i rieni ac addysgwyr a oedd yn cydnabod pwysigrwydd hanfodol addysg trwy'r famiaith.",
            birthTitle: "Genedigaeth Addysg Cyfrwng Cymraeg: 1953",
            birthPara1: "Yn dilyn cyfarfodydd trwy gydol 1952 a dechrau 1953, dan arweiniad ffigurau allweddol gan gynnwys Mrs. Eluned Bebb a gyda chefnogaeth athroniaeth addysgol W. Ambrose Bebb, gwnaeth Pwyllgor Addysg Sir Gaernarfon benderfyniad hanesyddol. Ym Mehefin 1953, pleidleisiodd i droi Ysgol St. Paul yn ysgol iau cyfrwng Cymraeg—y gyntaf o'i bath yn hanes modern Bangor.",
            birthPara2: "Dewiswyd Ysgol St. Paul yn benodol oherwydd bod ganddi niferoedd disgyblion isel, a oedd yn golygu y gallai'r trawsnewidiad ddigwydd gyda'r lleiaf o darfu ar system addysg Bangor. Agorodd yr \"Ysgol Gymraeg\" newydd ar 1 Chwefror 1953 gyda 37 o ddisgyblion. Cylchlythyrwyd rhieni plant a oedd eisoes yn mynychu St. Paul a gofynnwyd iddynt a oeddent yn dymuno i'w plant barhau pan fyddai'n dod yn Ysgol Gymraeg. Tyfodd yr ysgol yn gyson: erbyn 1955 roedd 72 o ddisgyblion, ac erbyn 1975 roedd y nifer wedi cyrraedd 242 o blant.",
            moveTitle: "Y Symudiad i Y Garnedd: 1975",
            movePara: "Wrth i'r ysgol Gymraeg barhau i dyfu, yn y pen draw tyfodd yn rhy fawr i adeilad St. Paul. Yn 1975, symudodd yr ysgol i gyfleuster newydd pwrpasol ac ailenwyd hi'n Ysgol Y Garnedd—yr ysgol a fyddai'n gwasanaethu'r gymuned tan ei dymchwel yn y blynyddoedd diweddar, pan agorwyd Ysgol Y Garnedd fodern newydd i barhau'r etifeddiaeth.",
            significanceTitle: "Yr Arwyddocâd Ehangach",
            significancePara: "Mae traethawd Bebb yn gosod y datblygiad hwn o fewn tri chan mlynedd o hanes addysgol Cymru, o \"Frad y Llyfrau Gleision\" yn 1847 hyd at fudiad yr ysgolion cyfrwng Cymraeg yng nghanol yr 20fed ganrif. Roedd sefydlu'r ysgol Gymraeg ym Mangor yn fwy na dim ond cyflawniad lleol—roedd yn cynrychioli uchafbwynt cenedlaethau o frwydr i sefydlu'r Gymraeg fel iaith ddilys ar gyfer addysg a cham hanfodol wrth sicrhau goroesiad yr iaith a'r diwylliant Cymraeg ar gyfer cenedlaethau'r dyfodol.",
            timelineTitle: "Llinell Amser:",
            timeline1953: "Ysgol St. Paul wedi'i throi'n \"Ysgol Gymraeg\" cyfrwng Cymraeg (37 disgybl)",
            timeline1955: "Yr ysgol wedi tyfu i 242 o ddisgyblion",
            timeline1975a: "Yr ysgol wedi tyfu i 242 o ddisgyblion",
            timeline1975b: "Symud i adeilad newydd, ailenwyd yn Ysgol Y Garnedd",
            timeline2021: "Adeilad gwreiddiol Ysgol Y Garnedd wedi'i ddymchwel",
            timeline2020: "Ysgol Y Garnedd newydd wedi agor",
            thesisNote: "Mae'r crynodeb hwn yn seiliedig ar draethawd H.M. Bebb 1976 sydd yn Mhrifysgol Bangor.",
            fireNote: "Dau dân a adroddwyd yn yr ysgol: un tua 1990 yn yr ystafell gerdd wrth ymyl neuadd yr ysgol, ac un arall yn 2015. Cyfeiriad: <a href='https://www.northwalesfire.gov.wales/news/2015/6/22/spate-of-deliberate-fires-in-bangor-area-prompts-safety-warning/' target='_blank'>Gwasanaeth Tân Gogledd Cymru, Mehefin 2015</a>."
        },
        tour: {
            title: "Taith 3D",
            placeholder: "Bydd cynnwys taith 3D yn cael ei arddangos yma",
            loading: "Llwytho model 3D...",
            navTitle: "🎮 Rheolaethau Llywio",
            navClick: "Cliciwch gyda'r llygoden yn yr ysgol i actifeiddio",
            navKeys: "i symud",
            navMouse: "Symudwch eich llygoden i edrych o gwmpas",
            bandwidthWarning: "Lawrlwythiad Mawr",
            bandwidthText: "Mae'r daith 3D hon yn gofyn am lawrlwytho ~540MB o ddata. Ar gysylltiadau arafach, gall hyn gymryd sawl munud.",
            cancelButton: "Canslo Llwytho",
            blenderDescription: "Crëwyd y model 3D yn Blender gan ddefnyddio'r cynllun llawr wedi'i ailgreu. Er ei fod wedi'i symleiddio, mae'n dal elfennau allweddol yr ysgol gan gynnwys yr ystafelloedd dosbarth, yr Ystafell Octagon, y Neuadd, a'r strwythur cyffredinol. Bydd y model yn cael ei fireinio ymhellach wrth i amser ganiatáu."
        },
        images: {
            title: "Lluniau"
        },
        about: {
            title: "Amdanom",
            content: "Bydd gwybodaeth am Ysgol Y Garnedd a'r prosiect hwn yn ymddangos yma."
        }
    }
};

// Get current language from localStorage or default to English
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to update the page language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        
        // Navigate through nested keys
        for (const key of keys) {
            translation = translation[key];
        }
        
        if (translation) {
            element.innerHTML = translation;
        }
    });
    
    // Update active language icon
    document.querySelectorAll('.lang-icon').forEach(icon => {
        if (icon.getAttribute('data-lang') === lang) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add click event listeners to language icons
    document.querySelectorAll('.lang-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
        
        // Add keyboard accessibility
        icon.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                setLanguage(lang);
            }
        });
    });
});
