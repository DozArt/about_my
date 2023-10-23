import my_photo from "./../images/IMG_6662-fotor-20230909211739.jpg"


function Avatar() {
    return (
        <div className="my_photo">
            <img src={my_photo} alt="Фото со мной" />
        </div>
    );
}

export default Avatar;
