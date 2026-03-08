const form = document.getElementById("form") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("test debug");

    const formData = new FormData(form);

    const a: number = Number(formData.get("a"));
    const b: number = Number(formData.get("b"));
    const c: number = Number(formData.get("c"));
    const d: number = Number(formData.get("d"));

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    const discriminant = b **2 * c **2 - 4 * a * c **3 - 4 * b **3 * d - 27 * a **2 * d **2 + 18 * a * b * c * d;

    console.log(discriminant);

    if (discriminant < 0) {
        (document.getElementById("result") as HTMLInputElement).value = "No Roots";
    } else if (discriminant > 0) {
        
        
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        (document.getElementById("result") as HTMLInputElement).value = `x=${rootOne}`;
    }
})

function threeDistinctRealRoots(a: number, b: number, c: number, d: number): number[] {
    
    
    return [1, 2, 3];
}