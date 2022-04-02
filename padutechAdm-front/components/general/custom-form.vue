<template>
    <div class="card">
        <div class="card-body">

            <div class="row">
                <div 
                v-for="field in fields" 
                :key="field.name"
                :class="'col-' + (field.break ? '12 row' : field.size)">
                    
                    <div
                    v-if="['text', 'password'].indexOf(field.type) > -1"
                    :class="'form-floating mb-3 ' + (field.break ? 'col-' + field.size : '')">
                        <input :id="field.name" :type="field.type" class="form-control" v-model="object[field.name]">
                        <label :for="field.name">{{ field.description }}</label>
                    </div>

                    <div
                    v-if="['select'].indexOf(field.type) > -1"
                    :class="'form-floating mb-3 ' + (field.break ? 'col-' + field.size : '')">
                        <select class="form-select" v-model="object[field.name]" :id="field.name">
                            <option selected>Selecione</option>
                            <option :key="option.value" v-for="option in field.options" :value="option.value">{{option.text}}</option>
                        </select>
                        <label :for="field.name">{{ field.description }}</label>
                    </div>
                
                </div>
            </div>

            <slot></slot>            
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },

    props: ['fields', 'object']
}
</script>