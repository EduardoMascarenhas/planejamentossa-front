export const QuillModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    ["link", "image"],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown

    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
  imageResize: {
    modules: ["Resize", "DisplaySize"],
  },
};

export const QuillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];
