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
      <h1>Profile</h1>
      <div>
        <div className="profile">
          <div className="profile__card">
            <img
              className="img"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671130.jpg?t=st=1711132466~exp=1711136066~hmac=0f58936c2049d5fb5f13e87b4f5ac60b1dcfe0e51f1264fc99ae756e7a5c3986&w=826"
              alt="avatar"
            />

            <div className="profile__card__name">{name}</div>
            <div className="profile__tags">
              {tags.map((tag: string, index: number) => (
                <div className="tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="profile__form">
            <label>Name</label>
            <input
              type="text"
              placeholder="Marija"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="tags">
              <label>Tags</label>
              <div>
                <input
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
