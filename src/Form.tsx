import React, { Fragment, useEffect, useState } from "react";
import { getForm } from "./config/Service";
import {
  IForm,
  IndecentChild,
  IndigoChild,
  TentacledChild,
} from "./models/IForm";

export default function Form() {
  const [formName, setFormName] = useState<string>("");
  const [axiosData, setAxiosData] = useState<IForm>();
  const [indigos, setIndigos] = useState<TentacledChild[]>([]);
  const [optionPLS, setOptionPLS] = useState<any>([]);
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  function getTags() {
    console.log("axiosData :>> ", axiosData);
    if (axiosData) {
      // console.log(axiosData.forms[0].bilgiler?.formname);
      // console.log(axiosData.forms[0].bilgiler?.formjson?.children[0].children[0].children[0].children);
      // console.log(axiosData.forms[0].bilgiler?.formjson?.children[0].children[0].children[0].children[1].children[1].children[0]);
      // console.log(
      //   axiosData.forms[0].bilgiler?.formjson?.children[0].children[0]
      //     .children[0].children[1].children[1].children[0]
      // );
      // axiosData.forms[0].bilgiler?.formjson?.children[0].children[0].children[0].children.map()
      const arr: any = [];
      const arro: any = [];
      axiosData.forms[0].bilgiler?.formjson?.children[0].children[0].children[0].children.map(
        (item, index) => {
          arr.push(item);
          if (index !== 0) {
            // item.children.map((item, index) => {
            //   arr.push(item)
            //   if (index !== 0) {
            //     arr.push(item) // yeni ekledim label için
            //     item.children.map((item, index) => {
            //       // arr.push(item);
            //       if (item.children) {
            //         console.log(item.children);
            //         item.children.map((item, index) => {
            //           console.log("asdasdasdasd", item);
            //           if (item.tag === "option") {
            //             arro.push(item);
            //           } else {
            //             arr.push(item);
            //           }
            //         });
            //       }
            //       arr.push(item);
            //       setIndigos(arr);
            //       setOptionPLS(arro);
            //       console.log("arr",arr);
            //     });
            //   }
            // });
            setIndigos(arr);
          }
        }
      );
      // axiosData.forms[0].bilgiler?.formjson?.children[0].children[0].children[0].children[1].children.map((item:IndigoChild,index) => {
      //     if(index === 1) {
      //         return console.log(item.children[0]);
      //     }
      // })
      setFormName(String(axiosData.forms[0].bilgiler?.formname));
    }
  }

  // içine yazıyok
  function getHTML() {
    console.log("asfasfdsfsdfsd", indigos);
    return indigos.map((item, index) => {
      if (item.children) {
        return (
          <Fragment key={index}>
            {React.createElement(
              String(item.tag),

              {
                className: item.class,
                key: index,
                html: item.html ? item.html : null,
              },
              item.children.map((item, index) => {
                console.log("childrenB :>> ", item);
                //  return  React.createElement(
                //     'p',
                //     {id:2},

                //     item.html
                //   )
                if (item.children) {
                  return item.children.map((item, index) => {
                    console.log("ChildrenK", item);
                    return React.createElement(
                      String(item.tag),
                      {
                        className: item.class,
                        html: item.html,
                        id: item.id,
                        name: item.name,
                        placeholder: item.placeholder,
                      },

                      item.html
                    );
                  });
                } else {
                  return React.createElement(
                    String(item.tag),
                    {
                      className: item.class,
                      htmlFor: item.for,
                      html: item.html,
                    },

                    item.html
                  );
                }
              })

              //   item.children.map((item, index) => {
              //     //console.log("child",item);

              //     if (item.children) {
              //       console.log("kanıt",item);
              //       item.children.map((item, index) => {
              //         console.log("item", item);
              //         return React.createElement(
              //           "p",

              //           {
              //             // className: item.class,
              //             // key: index,
              //             // htmlFor: item.for,
              //             // html: item.html ? item.html : null,

              //           },

              //           "item.html"
              //         );
              //       });
              //     } else {

              //       return (
              //         <Fragment key={index}>
              //           {React.createElement(
              //             String(item.tag),

              //             {
              //               className: item.class,
              //               key: index,
              //               htmlFor: item.for,
              //               html: item.html ? item.html : null,
              //             },

              //             item.html
              //           )}
              //         </Fragment>
              //       );
              //     }
              //   })
              //
            )}
          </Fragment>
        );
      } else {
        return (
          <Fragment key={index}>
            {React.createElement(
              String(item.tag),

              {
                className: item.class,
                key: index,
                html: item.html ? item.html : null,
              },

              item.html
            )}
          </Fragment>
        );
      }
    });

    // return indigos.map((item, index) => {

    //   if (
    //     item.children !== null &&
    //     item.tag !== "select" &&
    //     item.tag !== "option"
    //   ) {
    //     return (
    //       <Fragment key={index}>
    //         {React.createElement(
    //           String(item.tag),

    //           {
    //             className: item.class,
    //             key: index,
    //             type: item.type,
    //             placeholder: item.placeholder,
    //             html: item.html ? item.html : null
    //           },

    //           item.html
    //         )}
    //       </Fragment>
    //     );
    //   } else if (item.tag !== "select" && item.tag !== "option") {
    //     return (
    //       <Fragment key={index}>
    //         {React.createElement(
    //           String(item.tag),

    //           {
    //             className: item.class,
    //             key: index,
    //             type: item.type,
    //             placeholder: item.placeholder,
    //             html: item.html ? item.html : null,
    //           },

    //           item.html
    //         )}
    //       </Fragment>
    //     );
    //   } else if (item.tag === "select") {
    //     return (
    //       <Fragment key={index}>
    //         {React.createElement(
    //           String(item.tag),

    //           {
    //             className: item.class,
    //             key: index,
    //             type: item.type,
    //             placeholder: item.placeholder,
    //             html: item.html ? item.html : null,
    //           },
    //           optionPLS.map((item: any, index: any) => {
    //             return (
    //               <React.Fragment key={index}>
    //                 {React.createElement(
    //                   item.tag,

    //                   { html: item.html },
    //                   item.html
    //                 )}
    //               </React.Fragment>
    //             );
    //           })
    //         )}
    //       </Fragment>
    //     );
    //   }
    // });
  }

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const products: IForm = await getForm();

      // console.log("products :>> ", products);
      setAxiosData(products);
    })();
  }, []);
  useEffect(() => {
    getTags();
    // console.log(indigos);
  }, [axiosData]);
  // console.log(indigos);

  return (
    <div>
      <form className="form-horizontal">
        <fieldset >
        {getHTML()}
        </fieldset></form>
    </div>
  );
}
