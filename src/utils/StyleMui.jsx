export const dialogStyle = {
    "& .MuiPaper-root": {
        background: "rgba(20,20,20,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        backdropFilter: "blur(12px)",
        color: "#fff",
        borderRadius: "16px",
    },
};

// src/styles/textFieldStyle.js

export const textFieldDarkStyle = {
    mt: 2,

    "& .MuiInputBase-input": {
        color: "#fff",
    },

    "& .MuiInputLabel-root": {
        color: "#fff",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "#fff",
    },

    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,255,255,0.8)",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
    },

    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
    },
    "& input::-webkit-calendar-picker-indicator": {
        filter: "invert(1)",
    },
};


export const tableStyle = {
    backgroundColor: "transparent",

    "& .MuiTableCell-root": {
        color: "#fff",
        borderColor: "rgba(255,255,255,0.1)",
    },

    "& .MuiTableCell-head": {
        color: "#fff",
        fontWeight: 700,
    },
};

export const styleTable = {
    mt: 2,
    backgroundColor: "transparent",
    backgroundImage: "none", // Xóa nền mặc định của Paper
    boxShadow: "0 0 25px rgba(2, 248, 92, 0.4)",
    border: "1px solid rgba(0, 255, 255, 0.3)",
    borderRadius: "12px",
    overflow: "hidden",
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow:
        '0 8px 32px rgba(106, 17, 203, 0.3), 0 8px 32px rgba(37, 117, 252, 0.3)',

    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '12px',
        padding: '1px',

        background: 'linear-gradient(to right, #6a11cb, #2575fc)',

        WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',

        pointerEvents: 'none',
    },
};