import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import "./App.css";
import Image from "./Image";

const App = () => {
  const [images, setImages] = useState([]);
  return (
    <div className="App">
      <header className="nanavbar mb-2 shadow-lg bg-neutral text-neutral-content rounded p-3">
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            //Llamado de la api de unsplash
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=25&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID TxW_71x4Ad07_C9QZ-57quQYUq22I5AhEAK8LdyUVaw",
                },
              }
            );
            const data = await response.json();
            setImages((prev) => data.results);
          }}
        >
          <Form className="flex justify-center">
            <div className="form-control">
              <div className="input-group">
                <span>
                  <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                </span>
                <Field
                  name="search"
                  className="input input-bordered"
                  placeholder="Search"
                ></Field>
              </div>
            </div>
          </Form>
        </Formik>
      </header>
      <div className="flex justify-center">
        <div className="sm:columns-2 md:columns-3 lg:columns-4 container columns-1">
          {images.map((i) => (
            <Image key={i.id} image={i}></Image>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
