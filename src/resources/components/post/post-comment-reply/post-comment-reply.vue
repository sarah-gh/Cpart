<template>
            <div class="reply-icon">
                <img src="../../../../assets/img/export.svg" alt="">
            </div>
            <div class='comments'>
                <div class="name">{{ commentR.name }}</div>
                <div class="details">
                    <div class="date-time">
                        <p class="date">{{ commentR.date }}</p>
                        <span class="circle"></span> 
                        <span class="time">{{ commentR.time }}</span>
                    </div>
                    <div class="like-forward">
                        <img src="../../../../assets/img/forward-square.svg" class="forward">
                        <div class="like">
                            <img src="../../../../assets/img/like.svg">
                        </div>
                    </div>
                </div>
                <div class="text-comment">
                    <p>{{ commentR.text }}</p>
                </div>
            </div>
</template>

<script>
export default {
    name: "comment-reply",
    props: {
        commentR : {
            type: Object
        }
    }
}
</script>