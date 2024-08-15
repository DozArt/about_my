import my_project_1 from "./Onboarding.png"
import my_project_2 from "./info_delete.png"
import my_project_3 from "./number_error.png"

function Rakhat() {
  return (
    <div>
        <h2>Rakhar</h2>
        <p>(React Native, Gluestack-UI, Expo, API, Jira)</p>
        <p>Сервис бронирования туров</p>
        <img src={my_project_1} alt="Скрин проекта, вступление" />
        <img src={my_project_2} alt="Скрин проекта, удаление аккаунта" />
        <img src={my_project_3} alt="Скрин проекта, проверка номера" />
        <p>Основная моя цель в этом проекте это изучить просесс создания приложения с применением планирования задач в команде - регулярные meet up, распределение подзадач в Jira, кодревью в GitLab, тесты.</p>
        <p>Дополнительно я изучал новые библиотеки и инструменты используемые в этой работе, и регулярно читал чужой код</p>
        <p>Задачи выполнял категории - добавить отступы, задержку для очищения поля ввода телефона, верстка страниц "Удаления аккаунта" и "Об организации", анимирование splash screen и т.д.</p>
        <p></p>
        <hr />
    </div>
  );
}

export default Rakhat;
