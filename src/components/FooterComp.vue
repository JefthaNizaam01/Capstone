<template>
    <div class="container-fluid footer">
        <div class="row">
            <p class="lead">
                Timeless &copy; <span id="currYear">{{ currentYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            currentYear: new Date().getFullYear() 
        };
    }
}
</script>

<style scoped>
.footer {
    background-color: #e2dbd6;
    color: #968e87;
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
    text-shadow: 0 0 1px #968e87, 0 0 5px white, 0 0 10px white;
}

.lead {
    margin: 0;
}
</style>
