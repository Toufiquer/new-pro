const { useState, useEffect } = require("react");

const useToken = user => {
    const [token, SetToken] = useState("");
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    useEffect(() => {
        const newUser = {
            email: email,
            name: name,
        };
        // console.log(newUser);
        if (email && name) {
            fetch("https://gentle-lowlands-70395.herokuapp.com/user", {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then(res => res.json())
                .then(data => {
                    SetToken(data.token);
                    localStorage.setItem("access-token", data.token);
                });
        }
    }, [user, email, name]);
    return [token];
};
export default useToken;
