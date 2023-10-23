import AboutMy from "./AboutMy";
import MyProject from "./MyProject";


function Main() {
  return (
    <main>
        <h1 id="about_my">Обо мне</h1>
        <AboutMy />
        <h1 id="my_projects">Мои проекты</h1>
        <MyProject />
        <h1 id="hobby">Увлечения</h1>
        <p>Люблю велопоходы и немного играю на гитаре</p>
    </main>
  );
}

export default Main;
