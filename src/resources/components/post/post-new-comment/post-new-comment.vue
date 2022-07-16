<template>
    <form action="" class="form-comment">
        <div class="fname form-item">
            <label for="fname" class="label">نام*</label>
            <input class="input" type="text" id="fname" name="fname">
        </div>
        <div class="lname form-item">
            <label for="lname" class="label">نام خانوادگی*</label>
            <input class="input" type="text" id="lname" name="lname">
        </div>
        <div class="email form-item">
            <label for="email" class="label">ایمیل*</label>
            <input class="input" type="email" id="email" name='email'>
        </div>
        <div class='user-comment form-item'>
            <label for="user-comment" class="label">نظر دادن*</label>
            <textarea class="input" id="user-comment" name='user-comment'></textarea>
        </div>
        <div class="submit">
            <p>ثبت نظر</p>
        </div>
    </form>
</template>