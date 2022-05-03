const clientFields = [
    {
        name: "company_name",
        description: "Razão Social",
        size: 6,
        type: "text",
        placeholder: "",
        break: false,
        required: true
    },

    {
        name: "common_name",
        description: "Nome Fantasia",
        size: 6,
        type: "text",
        placeholder: "",
        break: false,
        required: true
    },

    {
        name: "cnpj",
        description: "CNPJ",
        size: 4,
        type: "text",
        placeholder: "",
        break: false,
        required: true,
        disabled: false
    },

    {
        name: "state_registry",
        description: "Inscrição Estadual",
        size: 4,
        type: "text",
        placeholder: "",
        break: false,
        required: true,
        disabled: true
    },

    // {
    //     name: "type",
    //     description: "Tipo",
    //     size: 4,
    //     type: "select",
    //     placeholder: "",
    //     break: false,
    //     required: true,
    //     options: [
    //         {
    //             value: "Cliente",
    //             text: "Cliente"
    //         }
    //     ]
    // }
]

export { clientFields }