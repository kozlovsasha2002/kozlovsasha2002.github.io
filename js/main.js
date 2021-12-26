//Класс "Книга" для добавления книг на сайт
class Book {
    title = "";
    author = "";
    prace = "";
    genre = "";
    year = "";
    pagesCount = "";
    rating = "";
    previewImage = "";
    fragment = "";
    description = "";

    constructor (title, author, prace, genre, year, pagesCount, rating, previewImage,  fragment, description) {
        this.title = title;
        this.author = author;
        this.prace = prace;
        this.genre = genre;
        this.year = year;
        this.pagesCount = pagesCount;
        this.rating = rating;
        this.previewImage = previewImage;
        this.fragment = fragment;
        this.description = description;
    }

}

//массив книг, в который помещаются все книги
let books = new Array();

//конструктор
this.addBook = function (title, author, prace, genre, year, pagesCount, rating, previewImage,  fragment, description) {
    books.push(new Book(title, author, prace, genre, year, pagesCount, rating, previewImage,  fragment, description));
}



addBook("Место под солнцем", "Андрей Васильев", "599 руб.", "ФАНТАСТИКА", "2015", "510", "4.5/5", "Mesto_pod_colncem.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/12196636.&art=12196636&trials=1&user=0&file=67765618", 
"Когда ты попадаешь в новый для себя мир, то тебе все кажется непривычным. Но когда этот мир оказывается совершенно не таким, каким его обещали рекламные проспекты, \
– это уже не только непривычно, но еще и не слишком комфортно. А уж когда выясняется, что это вообще не тот мир, в котором ты хотел \
очутиться, то жить становится совсем невесело. Но надо. И не просто жить, а попытаться отвоевать в нем для себя и для тех, кто встал \
рядом с тобой плечом к плечу, свое место под солнцем.");
addBook("Дюна. Первая трилогия", "Фрэнк Герберт",  "490 руб.", "ФАНТАСТИКА", "2014", "1610", "4.2/5", "Duna.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/25440524.&art=25440524&trials=1&user=0&file=85521056", 
"Спустя 24 тысячелетия человечество не изменилось: все те же войны и интриги. В далекой мультигалактической империи \
враждуют два великих дома – Атрейдесы и Харконнены. Последним удается склонить Императора на свою сторону, и юного \
наследника дома Атрейдесов – Пола – вместе с семьей высылают на далекую и пустынную планету Арракис, называемую также \
Дюной. Ужасные бури, гигантские черви, жестокие фанатики, фримены, и единственный во всей Вселенной источник Пряности, \
важнейшей субстанции в Империи, – таков новый дом Пола. Впереди его ждет сражение не только за Арракис, для чего ему придется \
стать лидером фрименов под именем Муад'Диб, но и за будущее существование своего Дома.");
addBook("Три дня Индиго", "Сергей Лукьяненко", "680 руб.", "ФАНТАСТИКА", "2021", "350", "4.8/5", "Tre_dny.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/66081894.&art=66081894&trials=1&user=0&file=90949723", 
"Перемена изменила все. Пришельцы, вторгшиеся на Землю, раздробили Луну, запретили Интернет и мобильную связь, установили \
свои порядки. В больших городах появились Гнезда, а все товары, в том числе первой необходимости, нужно было добывать в Комках. \
Изменилась и валюта. Единственное, что представляло сейчас ценность, были крошечные кристаллики. Их поиском занимались сёрчеры. \
Такие, как Максим Воронцов. Когда все это началось, он оканчивал школу, строил планы на будущее. Перемена стала переломным моментом. \
Максим потерял самое дорогое, но не опустил руки, приспособился. Начал свои поиски маленьких бесценных осколков. Жизнь продолжала \
испытывать парня на прочность, и не было видно конца этой бесконечной череде проверок. Сейчас, кажется, все успокоилось. Рядом была \
Дарина, Измененная жница, чья мутировавшая природа не лишила ее человечности. Была крыша над головой. Были планы на будущее.");



addBook("Как ты умрёшь", "Майк Омер", "780 руб.", "ДЕТЕКТИВЫ", "2016", "310", "4.7/5", "What_you_dead.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/66499550.&art=66499550&trials=1&user=0&file=89497086", 
"Никто не знает, когда и как именно настигнет смерть. Никто не планирует, в каком месте это произойдет, и какая музыка \
станет аккомпанементом для последнего вдоха. Не думала и Кендел Байерс, отправляясь на пробежку. Хотя, справедливости ради, \
один из треков Тейлор Свифт натолкнул ее на мрачную мысль, которая тут же улетучилась. Девушка бежала по парку, не догадываясь, \
что это последняя прогулка в ее жизни. Ее тело обнаружат не сразу, хоть оно и будет спрятано в неглубокой могиле в достаточно \
людном месте. Разобраться в обстоятельствах загадочной смерти предстоит детективу Митчеллу Лонни. Мужчина пробивает базы пропавших \
без вести, пытается выяснить хоть что-то о личности погибшей. В процессе расследования оказывается, что при жизни Кендел торговала \
подержанным женским бельем. Может, ее гибель связана с этой специфической деятельностью? Тем временем, по городу бродит кровожадный \
маньяк, который только начал свою жатву. Вскоре после Кендел погибает еще одна девушка, а Лонни обнаруживает связь между этими \
случаями. Обе жертвы незадолго до трагедии получили подсказку о том, что с ними произойдет. Монстр не может утолить свою жажду \
крови, он начинает убивать все чаще. Митчеллу нужно поскорее найти убийцу, иначе погибнет еще больше невинных женщин. Но сможет \
ли детектив не смешивать работу с личными интересами? Ведь зверь, кажется, взял след своего охотника.");
addBook("Поезд убийц", "Котаро Исака", "800 руб.", "ДЕТЕКТИВЫ", "2010", "540", "4.9/5", "Train_killer.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/66483340.&art=66483340&trials=1&user=0&file=89451478", 
"Нанао садится на сверхскоростной поезд из Токио в Мориоку с одной задачей: взять чемодан и выйти на следующей остановке. \
Звание самого неудачливого убийцы в мире все же сыграет с ним злую шутку – даже элементарное задание выполнить он не сможет. \
Потому что за тем же чемоданом следует парочка высококвалифицированных профессионалов, Мандарин и Лимон. И они не единственные, \
кто сел в этот поезд с особой миссией. Сатоши, невинный на первый взгляд парнишка, обычный школьник, на деле – опасный, злобный и \
хитрый психопат, тоже преследующий свою цель в этом составе. Он упивается риском и с удовольствием ведет философские беседы с \
другими пассажирами, пока не наступит его время действовать. Или пока за Сатоши не придет мститель, чтобы наказать за безрассудства \
прошлого. В одном поезде оказываются несколько убийц, которые преследуют практически идентичные цели. Кто останется в живых и \
возможно ли это вообще, когда в одну игру играют мастера своего дела?");
addBook("Последняя одиссея", "Джеймс Роллинс", "480 руб.", "ДЕТЕКТИВЫ", "2020", "400", "4.6/5", "Last_odissea.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/55345152.&art=55345152&trials=1&user=0&file=68144269", 
"Все думали, что Новый Свет открыл Христофор Колумб в 1492 году. Позже выяснилось, что первооткрывателями были викинги, которые обосновались в Гренландии и на территории современной северной Канады еще в конце десятого века. И это взбудоражило всю научную общественность, начались исследования. Во льдах Гренландии группа ученых обнаружила арабский корабль, который находится здесь, предположительно, с девятого века – он прибыл в эти земли еще раньше викингов! Вопросы вызывает не столько сама находка, сколько ее содержимое. На корабле исследователи находят старую карту и странный ларец с сильным радиоактивным излучением. Но и это еще не все. Это судно таит в себе слишком много опасностей не только для незваных гостей, но и для всего человечества. Что же заставило команду корабля отправиться за пределы доступной им карты? Какие секреты спрятаны в трюмах? И на что готовы пойти люди, желающие использовать находку для уничтожения всего мира?");



addBook("След Сокола", "Сергей Самаров", "720 руб.", "ФЭНТЭЗИ", "2013", "400", "4.4/5", "Sled_sokola.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/5811513.&art=5811513&trials=1&user=0&file=32964679",
"Некогда могущественный славянский племенной \
союз из-за внутренних распрей распался на несколько мелких княжеств. Княжество бодричей сохранило название союза да гордость за дни былые.\
 Оно же и стало яблоком раздора между противоборствующими силами, и эта внутренняя бойня заставила ужаснуться всю Европу. Годослав, князь\
  бодричей, сохранял целостность племени нечеловеческой волей, словом и мечом… В историю Годослав вошел не только как мужественный и мудрый \
  воин, но и как отец Рюрика, будущего основателя многовековой русской царской династии. Рюрик сохранил герб отца, трезубец, – геральдическое \
  выражение атакующего сокола…");
addBook("Заблудшая душа. Переселенец", "Григорий Шаргородский", "580 руб.", "ФЭНТЭЗИ", "2013", "440", "4.5/5", "Shveicarckiy_chet.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/6056470.&art=6056470&trials=1&user=0&file=62574780", 
"Новый мир, незнакомый и таинственный. Новое тело для погибшего на Земле человека и увлекательные приключения. Казалось бы, \
чего еще желать? Вот только пристанище для заблудшей души оказалось временным, а тот, кто организовал переселение, сделал это \
небескорыстно. Кем еще придется стать парню из российской глубинки: дворянином, пиратом, нелюдью-дари, генералом или даже \
императором? Это будет решать только могущественный кукловод, а «переселенцу» остается лишь надеяться, что из круговерти сплошных \
приключений все-таки есть выход.");
addBook("Тайны ордена", "Артем Каменистый", "890 руб.", "ФЭНТЭЗИ", "2016", "330", "4.5/5", "Tainy_ordena.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/18402811.&art=18402811&trials=1&user=0&file=66849101",
"Невозможно получить ответы в том случае, когда некому задавать вопросы. Все прочие твои затруднения – пустяки. \
И если источник ценных сведений найден, не скупись на плату. Что? Он не берет денег? И ты должен вновь отправиться за море, \
на негостеприимный южный берег? Ничего страшного, такая цена тебя вполне устраивает.И снова дует ветер в паруса боевых кораблей, \
лучше которых нет во всем мире, а гранитные стены рушатся, столкнувшись с тем, что этот мир тоже еще не видел. Сожженные крепости, \
взорванные галеры, разоренные города – такова цена за тайны ордена.");



//добавление книг в массив
addBook("Семь дней до Мегиддо", "Сергей Лукьяненко", "880 руб.", "РОМАНЫ", "2021", "330", "4.8/5", "seven_days.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/64008473.&art=64008473&trials=1&user=0&file=90606546", 
"Когда все это произошло, Макс заканчивал одиннадцатый класс. Однажды ночью он проснулся от воя сирен. Отец сказал, что началась война. В это трудно было поверить, как и трудно было понять, кто нанес первый удар. Лишь потом стало ясно, что речь вовсе не о внутреннем, не о земном конфликте. Так в жизни людей появились Инсеки. Привычный уклад навсегда остался в прошлом. В больших городах возникали Гнезда, там и тут открывались Комки, где за кристаллы можно взять у Продавцов буквально что угодно. Покупать у людей почти перестали – качество товаров оставляло желать лучшего. Луны тоже больше не было. После ее разрушения Землю окружило кольцо осколков, самые большие из которых получили названия Селена и Диана. Макс стал сёрчером. Используя специальные очки, он занимался поиском бесценных кристаллов. Старая жизнь осталась позади и почти забылась. К новой быстро привыкли. И никто не знает, сколько еще отведено человечеству на этой планете. Год? Месяц? Или всего неделя?");
addBook("Пусть меня осудят", "Ульяна Павловна Соболева", "700 руб.", "РОМАНЫ", "2018", "760", "4.7/5", "pyst_mena_osydat.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/54760161.&art=54760161&trials=1&user=0&file=81349747", 
"Вообще-то я была счастлива. По крайней мере, так казалось со стороны. Любимый и любящий муж, с которым мы вместе уже не один год, маленький сын, хорошая работа. Вот только семейная жизнь давно превратилась в рутину. Маршрут «дом-работа-дом» замкнулся в кольцо, из которого не вырваться. Супружеский секс без искорки раз в неделю. По вечерам сериалы и вязание. Быт заедал, иногда становилось совсем тоскливо. Я понимаю, Сережа тоже выматывается на работе, денег всегда не хватает. Но как же надоело это однообразие! И все же я была счастлива, мне повезло больше многих. Я любила Сережу, не допуская мысли о том, что могу когда-нибудь его предать. Я и не собиралась делать ничего такого. Пока не встретила его… Руслан. Еще совсем мальчишка, запретный плод. Опасный, как сама измена, как внезапно вспыхнувшая страсть. Случайная встреча в метро, один взгляд, пара слов. Не знаю, что это было, только выкинуть его из головы я уже не могла. Какое будущее может быть у взрослой женщины и сына криминального авторитета? И все же я погружаюсь в этот омут с головой. А там… Будь что будет!");
addBook("Орден Лино. Эра исполнения желаний", "Марина Суржевская", "920 руб.", "РОМАНЫ", "2021", "480", "4.8/5", "Orden_lino.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/65550216.&art=65550216&trials=1&user=0&file=89499074", 
"Десять лет назад мир изменился. Властитель Лино даровал людям исполнение заветных желаний. Наступила новая прекрасная эра, в которой каждый может получить то, о чем мечтал. И только я, девушка без имени и прошлого, не могу смириться с новыми порядками. Я хочу уничтожить того, кого называют богом.");



addBook("Красная таблетка. Посмотри правде в глаза!", "Андрей Курпатов", "980 руб.", "ОБРАЗОВАНИЕ", "2018", "270", "4.5/5", "red_tablet.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/32481440.&art=32481440&trials=1&user=0&file=90195318", 
"Книга простым языком объясняет читателю, каким образом работает человеческий мозг. Без сложной терминологии автор говорит о самой природе сознания – емко, просто и с долей юмора. Почему мы недооцениваем возможности собственного мозга, неправильно воспринимаем окружающий мир и людей в нем? А главное – почему большинству современников так тяжело найти самих себя? Ответы – в «Красной таблетке».");
addBook("Краткая история человечества", "Юваль Ной Харари", "590 руб.", "ОБРАЗОВАНИЕ", "2011", "570", "4.4/5", "brief_history.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/22150614.&art=22150614&trials=1&user=0&file=89298874", 
"Сто тысяч лет назад Homo sapiens был одним из как минимум шести видов человека, живших на этой планете, – ничем не примечательным животным, которое играло в экосистеме роль не большую, чем гориллы, светлячки или медузы. Но около семидесяти тысяч лет назад загадочное изменение когнитивных способностей Homo sapiens превратило его в хозяина планеты и кошмар экосистемы. Как человек разумный сумел покорить мир? Что стало с другими видами человека? Когда и почему появились деньги, государства и религия? Как возникали и рушились империи? Почему почти все общества ставили женщин ниже мужчин? Как наука и капитализм стали господствующими вероучениями современной эры? Становились ли люди с течением времени счастливее? Какое будущее нас ожидает?");
addBook("Уравнение Бога", "Митио Каку", "860 руб.", "ОБРАЗОВАНИЕ", "2021", "200", "4.7/5", "god.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/66590930.&art=66590930&trials=1&user=0&file=89723046", 
"«Уравнение Бога» – это увлекательный рассказ о поиске самой главной физической теории, способной объяснить рождение Вселенной, ее судьбу и наше место в ней. Знаменитый физик и популяризатор науки Митио Каку прослеживает весь путь удивительных открытий – от Ньютоновой революции и основ теории электромагнетизма, заложенных Фарадеем и Максвеллом, до теории относительности Эйнштейна, квантовой механики и современной теории струн, – ведущий к той великой теории, которая могла бы объединить все физические взаимодействия и дать полную картину мира. Уже более полувека физики разных стран не могут достичь этой грандиозной цели. Правильный ли путь они избрали? Есть ли «свет в конце тоннеля»? Об этом – новая книга Митио Каку.");



addBook("Три мушкетера", "Александр Дюма", "1500 руб.", "ПРИКЛЮЧЕНИЯ", "1844", "800", "4.7/5", "three_muchketa.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/122719.&art=122719&trials=1&user=0&file=29986384", 
"Известнейший историко-приключенческий роман из эпохи Людовика XIII знаменитого французского писателя-классика Александра Дюма-отца входит в золотой фонд мировой литературы. Четверо неразлучных друзей – д'Артаньян, Атос, Портос и Арамис, погружённые во все дворцовые тайны и интриги сильных мира сего, под девизом «Один за всех и все за одного» всегда выходят победителями, спасая честь королевы Анны Австрийской и противостоя многочисленным козням кардинала Ришелье.");
addBook("Окаянный дом", "Стасс Бабицкий", "550 руб.", "ПРИКЛЮЧЕНИЯ", "2019", "180", "4.8/5", "house.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/42596044.&art=42596044&trials=1&user=0&file=71342693", 
"Июнь 1897 года. Любовница купца Игумнова исчезает при таинственных обстоятельствах. По Москве ползет слух, будто он замуровал девицу в подвале своего дома. Живьем замуровал! Полиция никаких следов не обнаружила. Мармеладов берется расследовать эту историю.");
addBook("Жизнь после смерти", "Лера Некрасова", "720 руб.", "ПРИКЛЮЧЕНИЯ", "2021", "220", "4.9/5", "life_after_dead.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/65104586.&art=65104586&trials=1&user=0&file=90183290", 
"Как бы далеко ни шагнула человеческая цивилизация в исследовании мира земного и космического, как бы стремительно ни развивался прогресс, каких бы высот ни достигла наука, всегда останется то, что будет пугать и вызывать священный трепет у каждого человека. Смерть. И дело даже не в том, что земной путь внезапно прерывается, хотя и этот факт страшит. Вопрос скорее в неизвестности. Никто не знает, что же там за чертой. Вот эта самая неизвестность и приводит нас к бесконечным философским размышлениям, лишь усугубляющим замешательство и ужас перед неизбежным концом.");



addBook("Позже", "Стивен Кинг", "БОЕВИКИ", "1000 руб.", "2021", "240", "4.6/5", "later.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/66079668.&art=66079668&trials=1&user=0&file=89634229", 
"Джейми Конклин, живущий с матерью в Нью-Йорке, хочет быть всего лишь обычным подростком… но у него есть весьма необычный дар. Дар, который его мама настоятельно просит скрывать от других. Джейми умеет разговаривать с теми, кого уже нет на этом свете, а значит, ему доступны секреты, ушедшие с покойным в могилу. Однако обладание этим даром может стоить Джейми слишком дорого. В чем он скоро и убеждается, когда мамина подруга, детектив Лиз Даттон, просит его помочь разгадать последнее послание серийного подрывника. А на кону – десятки, сотни невинных жизней…");
addBook("Варяг. Я в роду старший", "Александр Мазин", "870 руб.", "БОЕВИКИ", "2021", "320", "4.8/5", "mazin.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/66772558.&art=66772558&trials=1&user=0&file=90916968", 
"«Какого ты рода?» Это первый вопрос, который задают незнакомцу в десятом веке. Отец, дед, прадед… Достоин ли ты их памяти? Достоин ли ты, их потомок, сесть за один стол с воинами? Достойно ли воинам идти за тобой? Можно ли с тобой родниться? Как бы ловко ты ни управлялся с оружием, как бы храбр ни был, без рода ты – никто. Сергей придумал, что отвечать на главный вопрос. Осталось лишь доказать: он – достоин.");
addBook("Путь искупления", "Джон Харт", "990 руб.", "БОЕВИКИ", "2016", "550", "4.8/5", "dgon_hart.jpg", 
"https://www.litres.ru/static/or4/view/or.html?baseurl=/pub/t/57160793.&art=57160793&trials=1&user=0&file=72639840", 
"Детективу полиции Северной Каролины Элизабет Блэк грозит уголовное дело за то, что она застрелила двух мужчин, изнасиловавших восемнадцатилетнюю девушку в заброшенном доме. Инцидент привлек повышенное внимание СМИ, потому что Элизабет, будучи белым полицейским, не просто стреляла в чернокожих мужчин, но еще и сделала это с особой жесткостью, всадив в подонков восемнадцать пуль. Удивительно, но Элизабет не проявляет никакого интереса к результатам расследования. Однако этой странной апатии приходит конец, когда Эдриен Уолл – бывший полицейский, к которому Элизабет когда-то испытывала чувства, – выходит из тюрьмы, где он отбывал тринадцатилетний срок за убийство женщины. Несмотря на убедительные доказательства судебной экспертизы Элизабет до сих пор уверена, что Эдриен не совершал преступления. Чего точно не скажешь о сыне погибшей – четырнадцатилетнем пареньке по имени Гидеон, который был вынужден почти всю свою жизнь провести с отцом-алкоголиком и теперь жаждет отомстить предполагаемому убийце. И это – далеко не самое страшное, что грозит Эдриену: происходит еще одно загадочное убийство, в котором вновь обвиняют… его.");


//подгрузка книг на страницу
function loadBooks(shouldBookBeRendered = function(book) { return true; }) {
    let renderedCount = 0;
    for (let i = 0; i < books.length; i++) {
        element = books[i];
        if (!shouldBookBeRendered(element))
            continue;
        renderedCount++;
        let card = $("<div/>", {class: 'card'});
        card.append($("<h3/>", {text: element.title}));
        let cardBody = $("<div/>", {class: 'card-body'});
        cardBody.append($("<img/>", {src: '../resources/' + element.previewImage}));
        let briefDesc = $("<div/>", {class: 'brief-desc'});
        briefDesc.append($("<p/>", {text: 'Автор: ' + element.author}));
        briefDesc.append($("<p/>", {text: 'Жанр: ' + element.genre}));
        briefDesc.append($("<p/>", {text: 'Цена: ' + element.prace}));
        briefDesc.append($("<p/>", {text: 'Год публикации: ' + element.year}));
        briefDesc.append($("<p/>", {text: 'Страниц: ' + element.pagesCount}));
        briefDesc.append($("<p/>", {text: 'Рейтинг: ' + element.rating}));
        briefDesc.append($("<a/>", {text: 'Читать', href: element.fragment, target:"_blank"}));
        briefDesc.append($("<a/>", {text: 'Купить', href: '', onclick: "event.preventDefault(); purchaseBook(" + i.toString() + ");"}));
        cardBody.append(briefDesc);
        card.append(cardBody);
        let description = $("<div/>", {class: 'description'});
        description.append($("<p/>", {text: element.description}));
        card.append(description);
        $("#bookshelf").append(card);
    }
    if (renderedCount == 0)
    {
        let card = $("<div/>", {
            class: 'card',
        });
        card.append($("<h3/>", {text: 'Книг не найдено'}));
        $("#bookshelf").append(card);
    }
}

//получение пользователей из локального хранилища
function getUsers() {
    let users = localStorage.getItem("users");
    if (users == null)
        return new Array();
    return JSON.parse(users);
}

//авторизация пользователя
function login(event) {
    event.preventDefault();
    let uname = $("#username").val();
    let passwd = $("#password").val();
    let isLoggedIn = false;
    getUsers().forEach(function (user) {
        if (uname == user[0] && passwd == user[1]) {
            isLoggedIn = true;
        }
    });
    if (isLoggedIn) {
        localStorage.setItem('loggedAs', uname);
        alert('Успешная авторизация');
        window.location = "./main_page.html";
    }
    else
        alert('Неверный логин или пароль');
    return false;
}

//регистрация пользователя
function register(event) {
    event.preventDefault();
    let uname = $("#username").val();
    let passwd = $("#password").val();
    let users = getUsers();
    let alreadyExists = false;
    users.forEach(function (user) {
        if (user[0] == uname)
        {
            alreadyExists = true;
            return;
        }
    });
    if (alreadyExists)
    {
        alert("Пользователь с таким именем уже зарегистрирован");
        return;
    }
    users.push([uname, passwd]);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Вы успешно зарегистрированы");
    window.location = "./login.html";
    return false;
}

//проверка авторизации пользователя на сайте
function isLoggedIn() {
    let uname = localStorage.getItem("loggedAs");
    if (uname != null)
        return true;
    return false;
}

//замена кнопки "Регистрации" кнопкой "Выйти"
function checkLogin() {
    if (!isLoggedIn())
        return;
    let uname = localStorage.getItem("loggedAs");
    $(".text-with-icon").remove();
    $(".account-nav").append($("<p/>", {text: uname}));
    let exitBtn = $("<a/>", {class: 'text-with-icon', href: '', onclick: "localStorage.removeItem('loggedAs'); window.location.reload();"});
    exitBtn.append($("<span/>", {text: 'Выйти'}));
    $(".account-nav").append(exitBtn);
}

//переход на страницу покупки книги
function purchaseBook(bookId) {
    if (!isLoggedIn()) {
        alert("Авторизуйтесь для покупки книги");
        return;
    }
    window.location = "./purchase.html?id=" + bookId.toString();
}

//загрузка книги при покупке
function loadBook(bookId) {
    element = books[bookId]
    let card = $("<div/>", {class: 'card'});
    card.append($("<h3/>", {text: element.title}));
    let cardBody = $("<div/>", {class: 'card-body'});
    cardBody.append($("<img/>", {src: '../resources/' + element.previewImage}));
    let briefDesc = $("<div/>", {class: 'brief-desc'});
    briefDesc.append($("<p/>", {text: 'Автор: ' + element.author}));
    briefDesc.append($("<p/>", {text: 'Жанр: ' + element.genre}));
    briefDesc.append($("<p/>", {text: 'Цена: ' + element.prace}));
    briefDesc.append($("<p/>", {text: 'Год публикации: ' + element.year}));
    briefDesc.append($("<p/>", {text: 'Страниц: ' + element.pagesCount}));
    briefDesc.append($("<p/>", {text: 'Рейтинг: ' + element.rating}));
    cardBody.append(briefDesc);
    card.append(cardBody);
    $("#bookshelf").append(card);
}