import { useForm } from 'react-hook-form';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Form() {
  // REGEX PATTERNS
  let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let phonePattern = /^\d+$/;
  let namePattern = /^[a-z ,.'-]+$/i;

  // HOOKS
  const { register, handleSubmit, formState: { errors }} = useForm();

  // FUNCTIONS  
  const onSubmit = () => alert("Successfully Registered :)");

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Create account</title>
        </Helmet>
    </HelmetProvider>   

    <section className="py-[2%] flex flex-col justify-center
    items-center gap-6">
        <article className="flex flex-col justify-center 
        items-center gap-2">
            <h2 className="text-3xl">Create an account</h2>
            <p>
                Earn rewards, benefits and more!
                It's easy, quick and convenient.
            </p>
        </article>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <label htmlFor="firstName" className="text-xs text-red-600">
                {errors.firstName?.type === "required" && 
                "First name is required."}
                {errors.firstName?.type === "minLength" && 
                "First name must be at least 3 characters."}
                {errors.firstName?.type === "pattern" && 
                "Names contain numbers or special characters."}
            </label>
            <input 
                type="text" 
                {...register("firstName", { required: true, minLength: 3, 
                pattern: namePattern })} 
                id="firstName"
                placeholder="First Name"
            />

            <label htmlFor="lastName" className="inline-block text-xs text-red-600">
                {errors.lastName?.type === "required" && 
                "Last name is required."}
                {errors.lastName?.type === "minLength" && 
                "Last name must be at least 2 characters."}
                {errors.lastName?.type === "pattern" && 
                "Names contain numbers or special characters."}
            </label>
            <input 
                type="text" 
                {...register("lastName", { required: true, minLength: 2,
                pattern: namePattern })} 
                id="lastName"
                placeholder="Last Name"
            />

            <label htmlFor="mail" className="text-xs text-red-600">
                {errors.mail?.type === "required" && 
                "Email is required."}
                {errors.mail?.type === "pattern" && 
                "Email not in correct format."}
            </label>
            <input 
                type="mail" 
                {...register("mail", { required: true,
                pattern: emailPattern
                })} 
                id="mail"
                placeholder="sample@email.com"
            />

            <label htmlFor="password" className="text-xs text-red-600">
                {errors.password?.type === "required" && 
                "Password is required."}
                {errors.password?.type === "minLength" && 
                "Password must be at least 7 characters."}
            </label>    
            <input 
                type="password" 
                {...register("password", { required: true, minLength: 7 })}
                id="password"
                placeholder="Password"
            />

            <label htmlFor="contact" className="text-xs text-red-600">
                {errors.contact?.type === "required" && 
                "Phone number is required."}  
                {errors.contact?.type === "pattern" && 
                "Phone number not in correct format."}
                {errors.contact?.type === "minLength" && 
                "Phone number must be at least 10 digits"}
            </label>
            <input 
                type="tel" 
                {...register("contact", { required: true, pattern: phonePattern,
                minLength: 10 })} 
                id="contact"
                placeholder="Phone# e.g 1234567890"
            />

            <input 
                type="submit" 
                value="Register" 
                className={`cursor-pointer 
                ${Object.keys(errors).length !== 0
                && 'bg-red-300'}`}
            />
        </form>
    </section>
    </>
  )
}

export default Form;