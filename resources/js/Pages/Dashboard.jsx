import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import Select from "react-select";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Dashboard(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        genre: null,
        character: '',
        age: '',
        time: '',
        location: '',
        plot: '',
    });

    const submit = (e) => {
        e.preventDefault()

        post(route('generate'))
    }

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 font-semibold text-lg border-b border-slate-100">
                            Prompt
                        </div>
                        <div className="p-6">
                            <form onSubmit={submit} className="w-full max-w-lg">
                                <div>
                                    <InputLabel value="Genre" />

                                    <Select
                                        value={data.genre}
                                        isMulti={true}
                                        onChange={(event) => setData('genre', event)}
                                        options={props.genres}
                                    />

                                    <InputError message={errors.genre} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel value="Character" />

                                    <TextInput
                                        type="text"
                                        name="character"
                                        value={data.character}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('character', e.target.value)}
                                    />

                                    <InputError message={errors.character} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel value="Age" />

                                    <TextInput
                                        type="text"
                                        name="age"
                                        value={data.age}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('age', e.target.value)}
                                    />

                                    <InputError message={errors.age} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel value="Time Setting" />

                                    <TextInput
                                        type="text"
                                        name="time"
                                        value={data.time}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('time', e.target.value)}
                                    />

                                    <InputError message={errors.time} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel value="Place / Location" />

                                    <TextInput
                                        type="text"
                                        name="location"
                                        value={data.location}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('location', e.target.value)}
                                    />

                                    <InputError message={errors.location} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel value="Plot" />

                                    <TextInput
                                        type="text"
                                        name="plot"
                                        value={data.plot}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('plot', e.target.value)}
                                    />

                                    <InputError message={errors.plot} className="mt-2" />
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Generate
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
