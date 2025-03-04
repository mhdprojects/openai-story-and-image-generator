import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function ResultGenerate(props){
    console.log(props)

    return (
        <AuthenticatedLayout>
            <Head title="Result Story" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg text-center">
                        <h1 className="text-2xl font-semibold py-4">{props.data.result.title}</h1>
                        <div className="flex items-center justify-center">
                            <img className="mt-4 w-auto h-auto rounded-lg" src={props.data.images.url} alt={props.data.result.title}/>
                        </div>

                        <div className="mt-8 mb-4 px-4">
                            <p className="font-semibold">Summary</p>
                            <p>{props.data.result.summary}</p>
                            <div className="flex items-center justify-center gap-2">
                                {
                                    props.data.form.genre.map((item, index) => (
                                        <p key={index} className="bg-indigo-500 text-white rounded-lg px-2 text-sm font-semibold">{item.label}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="px-4 mt-12">
                            {
                                props.data.result.chapters.map((item, index) => (
                                    <div key={index} className="my-6">
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p>{item.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
