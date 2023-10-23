import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    password: Yup.string().required().min(6).label( 'Password' ),
    terms:Yup.bool().oneOf([true,'You need to accept the terms and conditions'])
});

// export const loginSchema = Yup.object().shape({
//     email: Yup.string().required().email().label( 'Email' ),
//     password: Yup.string().required().min(3).label( 'Password' )
// });
export const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email or username is required')
      .test('is-email-or-username', 'Invalid email or username', function (value) {
        // Check if it's a valid email or a valid username with a minimum length of 4 characters
        return (
          Yup.string().email().isValidSync(value) ||
          (/^[a-zA-Z0-9_]+$/.test(value) && value.length >= 4)
        );
      }),
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password must be at least 3 characters long'),
  });

export const blogCommentSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    msg: Yup.string().required().min(20).label( 'Message' )
});

export const contactSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    phone: Yup.string().required().min(11).label( 'Phone' ),
    msg: Yup.string().required().min(20).label( 'Message' )
});

export const courseSchema = Yup.object().shape({
    title: Yup.string().required().label( 'Title' ),
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    msg: Yup.string().required().min(20).label( 'Summery' )
});