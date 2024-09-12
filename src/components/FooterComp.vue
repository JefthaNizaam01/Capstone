<template>
    <div class="container-fluid footer">
        <div class="row">
            <p class="lead">
                Timeless &copy; <span id="currYear">2024</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComp",
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