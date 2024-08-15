import my_project_1 from "./Screenshot_bikeCRM.jpg"
import my_project_2 from "./Screenshot_bikeCRM_2.jpg"
import my_project_3 from "./Screenshot_bikeCRM_3.jpg"

function BikeCrm() {
  return (
    <div>
        <h2>Bike CRM</h2>
        <p>(AppsScript, AppSheet, API click.ru)</p>
        <a href="https://www.appsheet.com/template/mobilepreview?appId=3653835c-95d4-4450-95a8-6b2b2cd138f4" target="_blank">смотреть</a>
        <p>Упрощенная версия CRM учета заказов по ремонту велосипедов</p>
        <img src={my_project_1} alt="Скрин проекта, очередь" />
        <img src={my_project_2} alt="Скрин проекта, заявка" />
        <img src={my_project_3} alt="Скрин проекта, новый заказ" />
        <p>Проект написан на конструкторе AppSheet с db в облаке и скриптом подключающим записную книжку</p>
        <p>Этот проект решает ряд проблем, с которыми не справлялись готовые решения такие как remonline, livesklad и другие</p>
        <hr />
    </div>
  );
}

export default BikeCrm;
