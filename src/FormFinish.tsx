import React, { Fragment, useEffect, useState } from "react";
import { getForm } from "./config/Service";
import { IForm, PurpleChild } from "./models/IForm";

export default function FormFinish() {
  const [axiosData, setAxiosData] = useState<IForm>();
  const [purpleChild, setPurpleChild] = useState<PurpleChild>();
  const [data, setData] = useState<any>({});

  function getTags() {
    if (axiosData) {
      setPurpleChild(
        axiosData.forms[0].bilgiler?.formjson?.children[0].children[0]
      );
    }
  }

  function getHTML() {
    return React.createElement(
      String(purpleChild?.tag),
      {
        html: purpleChild?.html,
        className: purpleChild?.class,
        onSubmit: dataHandler,
      },
      purpleChild?.children.map((item, index) => {
        return React.createElement(
          String(item.tag),
          {
            html: item.html,
            key: index,
          },
          item.children.map((item, index) => {
            // console.log(item);
            if (item.children) {
              return (
                <Fragment key={index}>
                  {React.createElement(
                    String(item.tag),
                    {
                      key: index,
                      className: item.class,
                      html: item.html,
                    },
                    item.children.map((item, index) => {
                      //console.log(item);
                      if (item.children) {
                        return React.createElement(
                          String(item.tag),
                          {
                            className: item.class,
                            htmlFor: item.for,
                            html: item.html,
                            key: index,
                          },
                          item.children.map((item, index) => {
                            //console.log(item);
                            if (item.children) {
                              return React.createElement(
                                String(item.tag),

                                {
                                  className: item.class,
                                  htmlFor: item.for,
                                  html: item.html,
                                  key: index,
                                  placeholder: item.placeholder,
                                  onChange: changeHandler,
                                  name: item.name,
                                },
                                item.html,
                                item.children.map((item, index) => {
                                  //console.log(item);
                                  if (item.tag === "input") {
                                    return React.createElement(
                                      String(item.tag),
                                      {
                                        checked: item.checked,
                                        id: item.id,
                                        name: item.name,
                                        type: item.type,
                                        value: item.value,
                                        key: index,
                                        onChange: changeHandler,
                                      },
                                      item.html
                                    );
                                  } else {
                                    return React.createElement(
                                      String(item.tag),
                                      {
                                        html: item.html,
                                        key: index,
                                      },
                                      item.html
                                    );
                                  }
                                })
                              );
                            } else {
                              return React.createElement(
                                String(item.tag),

                                {
                                  className: item.class,
                                  htmlFor: item.for,
                                  html: item.html,
                                  key: index,
                                  placeholder: item.placeholder,
                                  onChange: changeHandler,
                                  name: item.name,
                                },
                                item.html
                              );
                            }
                          })
                        );
                      } else {
                        return React.createElement(
                          String(item.tag),
                          {
                            className: item.class,
                            htmlFor: item.for,
                            html: item.html,
                            key: index,
                          },
                          item.html
                        );
                      }
                    })
                  )}
                </Fragment>
              );
            } else {
              return React.createElement(
                String(item.tag),
                {
                  html: item.html,
                  key: index,
                },
                item.html
              );
            }
          })
        );
      })
    );
  }
  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const products: IForm = await getForm();

      setAxiosData(products);
    })();
  }, []);
  useEffect(() => {
    getTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosData]);
  useEffect(() => {}, [purpleChild]);

  const changeHandler = (e: any) => {
    console.log(e.target.value);
    console.log(e.target.name);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dataHandler = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return <>{getHTML()}</>;
}
