import "./FirstPage.css";

// Block elements
function FirstPage() {
    return (
        <div>
            <header>
                <nav>nav tag</nav>
            </header>

            <div>
                <h1>H1</h1>
                <div className="outerparagraph">
                    <p>Paragraph</p>
                    <div>
                        <p>Inner paragraph</p>
                    </div>
                </div>

                <p>
                    <span>
                        Here you can find some links{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://https://vk.com/id100971075"
                        >
                            the most beautiful girl
                        </a>
                    </span>
                </p>

                <span>Span 1</span>
                <span>Span 2</span>

                <p>First spisok</p>
                <ol>
                    <li>
                        Владеть практическими и теоретическими знаниями по своей
                        специальности. То есть уметь делать то чем решил
                        заниматься.
                    </li>
                    <li>
                        Иметь доступ к необходимым инструментам. Другими словами
                        купить, одолжить либо взять в аренду необходимые
                        инструменты либо аппаратуру для качественного выполнения
                        заказа.
                    </li>
                    <li>
                        Найти рынок сбыта твоего товара либо услуг.
                        Зарегистрироваться на фриланс биржах либо найти другие
                        площадки где можно предложить именно твои услуги.
                    </li>
                    <li>
                        Иметь базовые устные или письменные навыки коммуникации.
                        То есть уметь говорить с людьми, клиентами.
                    </li>
                </ol>

                <p>Second spisok</p>
                <ul>
                    <li>
                        Тут тоже нужно владеть знаниями по своей специальности.
                        Но именно теми подвидами, технологиями, инструментами
                        которые требует конкретная вакансия.
                    </li>
                    <li>
                        Владеть дополнительными знаниями программ и практик
                        которые применяются в конкретном офисе.
                    </li>
                    <li>
                        Быть молодым. Этот пункт не всегда озвучиваться, но к
                        сожалению практика показывает, что его стоит сюда
                        включить.
                    </li>
                    <li>
                        Владеть английским языком. В самом знании языка ничего
                        плохого не вижу, но тем не менее это дополнительное
                        требование.
                    </li>
                    <li>
                        Быть командным игроком. Как правило, для компании это
                        важнее чем твои знания. Для руководства необходимо без
                        болезненно управлять коллективом, по этому «выскочки» и
                        чересчур амбициозные кандидаты которые не привыкли
                        играть по правилам скорее всего будут отсеяны.
                    </li>
                </ul>
                <img src="img/cat.jpg" alt="Can't load" />
                <p>
                    Ты программист, соответственно тебе нужно владеть именно тем
                    языком программирования который указан в вакансии. А так же
                    дополнительно владеть знаниями различных офисных программ
                    для работы в команде. Как правило, быть молодым и знать
                    английский. <br /> Уметь и любить работать в коллективе, а
                    твои амбиции не должны выходить за рамки компании.
                </p>

                <form action="#" method="post" encType="multipart/form-data">
                    <div>
                        <p>Имя</p>
                        <input
                            placeholder="Имя"
                            tabIndex="1"
                            name="username"
                            type="text"
                        />
                    </div>
                    <div>
                        <p>Пароль</p>
                        <input tabIndex="2" name="userpass" type="password" />
                    </div>
                    <div>
                        <p>Телефон</p>
                        <input tabIndex="3" name="userphone" type="tel" />
                    </div>
                    <div>
                        <p>Пол</p>
                        <div>
                            <input
                                tabIndex="4"
                                checked
                                type="radio"
                                name="gender"
                                value="male"
                            />{" "}
                            Мужской
                        </div>
                        <div>
                            <input
                                tabIndex="4"
                                type="radio"
                                name="gender"
                                value="female"
                            />{" "}
                            Женский
                        </div>
                    </div>
                    <div>
                        <p>Имущество</p>
                        <div>
                            <input
                                tabIndex="5"
                                checked
                                type="checkbox"
                                name="bike"
                                value="yes"
                            />{" "}
                            Велик
                        </div>
                        <div>
                            <input
                                tabIndex="6"
                                type="checkbox"
                                name="car"
                                value="yes"
                            />{" "}
                            Машина
                        </div>
                        <div>
                            <input
                                tabIndex="7"
                                disabled
                                type="checkbox"
                                name="house"
                                value="yes"
                            />{" "}
                            Дом
                        </div>
                    </div>
                    <div>
                        <p>Дополнительная информация</p>
                        <textarea tabIndex="8" name="text"></textarea>
                    </div>
                    <div>
                        <p>Прикрепить фото</p>
                        <input tabIndex="9" type="file" />
                    </div>
                    <div>
                        <p>Любимый цвет</p>
                        <select tabIndex="10" name="color">
                            <option value="red">Красный</option>
                            <option value="green">Зеленый</option>
                            <option selected value="yellow">
                                Желтый
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Действия</p>
                        <button tabIndex="11" type="submit">
                            Отправить
                        </button>
                        <button tabIndex="12" type="reset">
                            Очистить
                        </button>
                    </div>
                </form>
            </div>

            <footer>footer tag</footer>
        </div>
    );
}

export default FirstPage;
