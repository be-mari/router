import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState<string>("Marija");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <h1 className="profile__h1">Profile</h1>
      <div>
        <div className="profile">
          <div className="profile__card">
            <img
              className="profile__img"
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100234.jpg?t=st=1711150045~exp=1711153645~hmac=28f3f1a96e3ec2ec2faf79d7f23192563b104eaf5c28adfe6154b095c1965bda&w=360"
              alt="avatar"
            />

            <div className="profile__card__name">{name}</div>
            <div className="profile__tags">
              {tags.map((tag: string, index: number) => (
                <div className="profile__tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="profile__form">
            <label className="profile__label">Name</label>
            <input
              className="profile__inpt"
              type="text"
              placeholder="Marija"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="tags">
              <label className="profile__label">Tags</label>
              <div>
                <input
                  className="profile__inpt"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="profile__btn" onClick={handleAddTag}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
