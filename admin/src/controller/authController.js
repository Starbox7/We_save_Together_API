import authService from "../service/authService.js";
import StatusCode from "../util/StatusCode.js";

const authController = {
    signup: async (req, res) => {
        const { id, password, name, hakbun, email } = req.body
        try {
            await authService.checkDuplicatedId(id);
            await authService.checkDuplicatedHakbun(hakbun);
            await authService.checkDuplicatedEmail(email);

            await authService.signup({ id, password, name, hakbun, email });
            return res.status(StatusCode.CREATED.status).json(StatusCode.CREATED);
        } catch (err) {
            /** Test!!! */ console.log(`signup Error : ${err}`);
            return res.status(StatusCode.SERVER_ERROR.status).json(StatusCode.SERVER_ERROR)
        }
    }
}

export default authController;
//              /** Test!!! */ console.log(`${}`);