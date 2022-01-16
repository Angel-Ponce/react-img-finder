import { useState } from "react";

const Image = ({ image }) => {
  const [likesHover, setLikesHover] = useState(false);
  return (
    <div className="card card-bordered my-2 inline-block shadow-2xl bg-neutral">
      <a href={image.links.html} target="_blank" rel="noreferrer">
        <img src={image.urls.regular} alt={image.alt_description} />
      </a>
      <div className="card-body p-6">
        {image.alt_description ?? "No description provided."}
        <div className="flex justify-center items-center py-2 gap-2">
          {image.tags.map((t, i) => (
            <div className="badge badge-info" key={i}>
              {t.title}
            </div>
          ))}
        </div>
        <div className="divider opacity-25"></div>
        Thanks by, {image.user.first_name}
        <div className="flex justify-end align-bottom">
          <div
            className="badge badge-primary"
            onMouseEnter={() => setLikesHover(true)}
            onMouseLeave={() => setLikesHover(false)}
          >
            ♥{" "}
            <div className={`likes text-base ${!likesHover ? "hidden" : ""}`}>
              {image.likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
