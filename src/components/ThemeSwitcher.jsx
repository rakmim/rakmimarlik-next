import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
    useEffect(() => {
        // Day-Night Mode Switcher
        var icon = document.getElementById("mode_switcher");

        if (localStorage.getItem("theme") === "null") {
            localStorage.setItem("theme", "dark");
        }

        // let localData = localStorage.getItem("theme");

        // if (localData === "light") {
        //     icon.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>';
        //     document.body.classList.remove("bg-white");
        // } else if (localData === "dark") {
        //     icon.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>';
        //     document.body.classList.add("bg-white");
        // }

        icon.onclick = function () {
            document.body.classList.toggle("bg-white");
            if (document.body.classList.contains("bg-white")) {
                icon.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>';
                localStorage.setItem("theme", "dark");
            } else {
                icon.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>';
                localStorage.setItem("theme", "light");
            }
        }
    }, []);
    return (
        <div id="mode_switcher">
            <span><i className="bi bi-sun-fill"></i></span>
        </div>
    );
};

export default ThemeSwitcher;