// export const retrive = async (req, res) => {
//     try {
//         const todos = awaitTodo.fin()
//         res.status(200).json ({
//             message: "Todos fetched successfully",
//             todos
//         });
//     } catch (error){
//         console.log(error);

//         req.status(500).json ({
//             error: error.message
//         });
//     }
// };


export const retrieve = (req, res) => {
    res.send("This is fetching")
}
