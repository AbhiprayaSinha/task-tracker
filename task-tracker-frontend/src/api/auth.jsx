const signUpApi = async (data) => {
    const response = await fetch(`${URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    return response.json();
};

const signInApi = async (data) => {
    const response = await fetch(`${URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    return response.json();
};

const signOutApi = async () => {
    const response = await fetch(`${URL}/signout`, {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    return response.json();
};