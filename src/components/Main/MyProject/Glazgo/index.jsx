import my_project_1 from "./candidate.png"
import my_project_2 from "./recr.png"
import my_project_3 from "./admin.png"

function Glazgo() {
  return (
    <div>
        <h2>GlazGo</h2>
        <p>(React, jsx, bootstrap, swagger, <a href="https://docs.google.com/document/d/1YIWnMLoWg0w5SupCL1AxTqc4tphReNLU5wPNbyAXjNA/edit" target="_blank">ТЗ</a>, <a href="https://www.figma.com/design/CzaDUI3zV90CrBqP17qGFS/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-15.-CRM?node-id=74-6648&t=FUlx5Ys8bxDdQg5a-0" target="_blank">Figma</a>, <a href="https://gitlab.com/ZigulatNatria/glazgo_frontend" target="_blank">GitLab</a>
        )</p>
        <p>Cервиса для автоматизации «массового подбора персонала»</p>
        <img src={my_project_3} alt="Скрин проекта, дашборд2" />
        <p>Проект выданный из хакатона. Задание было выдано трем командам и на выполнение выделялся ровно месяц.</p>
        <p>Надо было проанализировать конкурентов, составить UX/UI, сверстать основные страницы и провести презентацию.</p>
        <p>В данном проекте мы выиграли хакатон в номинации - выбор заказчика.</p>
        <hr />
    </div>
  );
}

export default Glazgo;
