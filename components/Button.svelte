<script>
    import { count } from '../store/stores.js'

    export let incrementalButtonText
    export let decrementalButtonText
    export let resetButtonText
</script>

<p>count: {$count}</p>

<button on:click={count.increment}>{incrementalButtonText}</button>
<button on:click={count.decrement}>{decrementalButtonText}</button>
<button on:click={count.reset}>{resetButtonText}</button>