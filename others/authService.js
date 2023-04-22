// import 'dotenv/config';
// import { genSalt, hash, compare } from 'bcrypt';

// const { Admin_I, Admin_II, Admin_III, Admin_IV, Admin_V, major } = process.env;

// const userService = {
//   checkAdminInfo: async (data) => {
//     const { name, hakbun, email, phone } = data;
//     const salt = await genSalt(10);
//     const hashed = await hash(major + hakbun + phone, salt);
//     const result = false;

//     switch (name) {
//       case '김창훈':
//         if (!(result = await compare(major + hakbun + phone, Admin_I))) {
//           throw new Error('UserInfo if not Admin');
//         }
//         break;
//       case '김범준':
//         if (!(result = await compare(major + hakbun + phone, Admin_II))) {
//           throw new Error('UserInfo if not Admin');
//         }
//         break;
//       case '박보근':
//         if (!(result = await compare(name + hakbun + email + phone, Admin_III))) {
//           throw new Error('UserInfo if not Admin');
//         }
//         break;
//       case '박현아':
//         if (!(result = await compare(name + hakbun + email + phone, Admin_IV))) {
//           throw new Error('UserInfo if not Admin');
//         }
//         break;
//       case '채지훈':
//         console.log('here');
//         if (!(result = await compare(name + hakbun + email + phone, Admin_V))) {
//           throw new Error('UserInfo if not Admin');
//         }
//         break;
//       default:
//         throw new Error('User is not Admin');
//     }
//     console.log(result);
//   },
// };

// export default userService;
