<template>
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <slot name="actions" />
                </div>
                <div class="card-actions btn-actions">
                    <a href="" class="btn-action">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </a>
                </div>
            </div>
            <!-- <div class="card-body">Simple card</div> -->
        </div>        
    </div>
</template>