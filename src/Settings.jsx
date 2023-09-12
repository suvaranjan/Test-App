import React from "react";
import { Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useTheme, useSetting } from "./store/zustand";
import { validationSchema } from "./Schema/validationSchema";

export default function Settings() {
  const { correctMarkValue, setCorrectMarkValue, percentage, setPercentage } =
    useSetting();
  const { isDarkMode } = useTheme();
  const initialValues = {
    mark: correctMarkValue,
    percentage: percentage,
  };

  const handleSubmit = (values) => {
    setCorrectMarkValue(values.mark);
    setPercentage(values.percentage);
    toast.success("Changes saved!!");
  };
  console.log(correctMarkValue);
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: isDarkMode ? "#151717" : null,
            color: isDarkMode ? "#fff" : null,
            border: isDarkMode ? "1px solid #38383d" : null,
          },
        }}
      />
      <div
        className="container"
        style={
          isDarkMode
            ? {
                backgroundColor: "#151717",
                color: "#b2b2bf",
                border: "1px solid #4a4a4f",
              }
            : null
        }
      >
        <div className="sub-div">
          <div
            className="box1"
            style={
              isDarkMode
                ? {
                    color: "#fff",
                  }
                : null
            }
          >
            <h1>Settings</h1>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors }) => (
            <Form>
              <div className="setting-box2">
                <div className="item cp">
                  <label htmlFor="mark">Each correct answer</label>
                  <div className="timerdiv">
                    <Field
                      type="number"
                      name="mark"
                      id="mark"
                      inputMode="numeric"
                      style={
                        isDarkMode
                          ? {
                              backgroundColor: "#151717",
                              color: "#b2b2bf",
                              border: "none",
                            }
                          : null
                      }
                    />
                    <label htmlFor="mark">mark</label>
                  </div>
                </div>
                {errors.mark && <p className="validationPara">{errors.mark}</p>}
              </div>
              <div className="setting-box2">
                <div className="item cp">
                  <label htmlFor="percentage">Passing Percentage</label>
                  <div className="timerdiv perc-div">
                    <Field
                      type="number"
                      name="percentage"
                      id="percentage"
                      className="percentage"
                      inputMode="numeric"
                      style={
                        isDarkMode
                          ? {
                              backgroundColor: "#151717",
                              color: "#b2b2bf",
                              border: "none",
                            }
                          : null
                      }
                    />
                    <label htmlFor="percentage">%</label>
                  </div>
                </div>
                {errors.percentage && (
                  <p className="validationPara">{errors.percentage}</p>
                )}
              </div>

              <div className="saveBtn">
                <button type="submit">Save</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
