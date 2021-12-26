class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <header>            
            <div class="header">
                <div class="wrapper">
                    <div id="head-wrapper">
                        <img src="../resources/Book.png" width="100px">
                        <nav id="middle-nav">
                            <a href="./main_page.html">Главная</a>
                            <a href="./books.html">Книги</a>                   
                            <a href="./authors.html">Авторы</a>
                            <a href="./top3.html">ТОП-3</a>
                            <a href="./reference.html">Справка</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="lower header">
                <div class="wrapper coldir">
                    <form class="search-container" method="get" action="./search.html">
                        <input type="text" placeholder="Поиск по книгам" name="query">
                        <button type="submit">Поиск</button>
                    </form>
                    <div class="account-nav">
                        <a class="text-with-icon" href="./login.html">
                            <span>Войти</span>
                        </a>
                        <a class="text-with-icon" href="./register.html">
                            <span>Регистрация</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        `;
    }
  }
  class Footer extends HTMLElement {
      constructor() {
        super();
      }
    
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="upper footer">
                <div class="wrapper">
                    <nav class="bottom-nav">
                            <p class="title">О компании</p>                   
                        <a href="./main_page.html">
                            <p>Информация о магазине</p>
                        </a>
                        <a href="./main_page.html">
                            <p>Информация о продавце</p>
                        </a>
                    </nav>
                    <nav class="bottom-nav">
                        <p class="title">Покупателям</p>
                        <a href="./reference.html">
                            <p>Политика конфиденциальности</p>
                        </a>
                        <a href="./reference.html">
                            <p>Как с нами связаться</p>
                        </a>                    
                    </nav>
                </div>
            </div>
            <div class="lower footer">
                ©author - Alexander Kozlov 2021
            </div>
        </footer>
        `;
      }
  }
  
  customElements.define('header-component', Header);
  customElements.define('footer-component', Footer);