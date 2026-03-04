[org 0x0100]
    jmp start

; String lengths
time_len:    dw 22
score_len:   dw 14
end_len:     dw 26
end_len1:    dw 25
trophy_len:  dw 14
message_len: dw 25
title_len:   dw 80    ; For ASCII art
start_len:   dw 13
instruction_length: dw 15
quit_len:    dw 7
prompt_len:  dw 29
length:      dw 11
boxlen:      dw 37
noteslen:    dw 32
difficultylen:dw 18
diffasciilen :dw 44
note1len:     dw 17
gameovlen:    dw 57
instlen: dw 71

; Menu strings
menu_title0:  db ' ======== WELCOME TO SUDOKU! ========             '
menu_title1:  db '   _____           _         _                    '
menu_title2:  db '  / ____|         | |       | |                   '
menu_title3:  db ' | (___  _   _  __| |  ____ | | __ _   _          '
menu_title4:  db '  \___ \| | | |/ _` |/ / _ \| |/ /| | | |         '
menu_title5:  db '  ____) | |_| | (_) | | (_) |   < | |_| |         '
menu_title6:  db ' |_____/ \__,_|\__,_|\_\___/|_|\_\ \__,_|         '
menu_title7:  db '=================================================='

menu_start:  db '1. Start Game'
menu_instructions:   db '2. Instructions'
menu_quit:   db '3. Quit'
menu_prompt: db 'Press 1 to start or 2 to quit'

;GAMEOVER PAGE
gameov1:     db '   ______                        ____                  __'
gameov2:     db '  / ____/___ _____ ___  ___     / __ \_   _____  _____/ /'
gameov3:     db ' / / __/ __ `/ __ `__ \/ _ \   / / / / | / / _ \/ ___/ / '
gameov4:     db '/ /_/ / /_/ / / / / / /  __/  / /_/ /| |/ /  __/ /  /_/  '
gameov5:     db '\____/\__,_/_/ /_/ /_/\___/   \____/ |___/\___/_/  (_)   '
;ENDING PAGE
;Trophy        
trophy     :db   '*           * '
trophy_0    :db  ' *         *  '
trophy_1    :db  '  *       *   '
trophy_2    :db  '    *   *     '
trophy_3    :db  '      *       '
trophy_4    :db  '     ___      '
trophy_5    :db  '    (   )     '
trophy_6    :db  '   (     )    '
trophy_7    :db  '    \___/     '
trophy_8    :db  '     | |      '
trophy_9    :db  '   --|_|--    '
trophy_10   :db  '  | winner |  '
trophy_11   :db  '  |________|  '
 
 continuemsg:  db 'Press Any Key to Continue'
end_message1:  db 219,178,177,176, ' CONGRATULATIONS! ',176,177,178,219
end_message2:  db 'You completed the Sudoku!'
score_text:    db 'Final Score: 0'
time_text:     db 'Completion Time: 0:00 '
timeEnd:       db ' RAN OUT OF TIME! '
columncompleted: db'Column Completed!!!'
rowcompleted   : db'Row Completed!!!   '
diffch:        db 'CHOOSE DIFFICULTY!'
diffch1:       db '1: Easy   '
diffch2:       db '2: Medium '
diffch3:       db '3: Hard   '
diffch4:       db '4: Expert '
diffch5:       db '5: Master '
diffch6:       db '6: Extreme'

diffascii1:     db '    ____  _ _________            ____       '
diffascii2:     db '   / __ \(_) __/ __(_)______  __/ / /___  __'
diffascii3:     db '  / / / / / /_/ /_/ / ___/ / / / / __/ / / /'
diffascii4:     db ' / /_/ / / __/ __/ / /__/ /_/ / / /_/ /_/ / '
diffascii5:     db '/_____/_/_/ /_/ /_/\___/\__,_/_/\__/\__, /  '
diffascii6:     db '                                   /____/   '
diffascii7:     db '============================================'

inst1:          db'  _____              _                       _    _                    '
inst2:          db' |_   _|            | |                     | |  (_)                   '
inst3:          db'   | |   _ __   ___ | |_  _ __  _   _   ___ | |_  _   ___   _ __   ___ '
inst4:          db'   | |  |  _ \ / __|| __||  __|| | | | / __|| __|| | / _ \ |  _ \ / __|'
inst5:          db'  _| |_ | | | |\__ \| |_ | |   | |_| || (__ | |_ | || (_) || | | |\__ \'
inst6:          db' |_____||_| |_||___/ \__||_|    \__,_| \___| \__||_| \___/ |_| |_||___/'
insta22:       db '======================================================================='
inst67:db 'CONTROLS:                                '             
inst7: db '- Arrow Keys: Move across the board.             '
inst8: db '- Keys 1-9 : Enter a number in the selected cell.'
inst9: db '- U        : Undo your last move.                '
inst10:db '- N        : Toggle Notes Mode ON/OFF.           '
inst11:db 'NOTES MODE:                                      '
inst12:db '- When active, press 1-9 to:                     '
inst13:db'- Add a note.                                     '
inst14:db'- Remove an existing note.                        '


message:     db 'TIMER[0:00]'
notes:       db 'UNDO ',179,' Choose: 1 2 3 4 5 6 7 8 9'
note0:       db 179,'NOTES',179
note1:       db 'Enter Note! [1-9]'

mistakes:    db 'MISTAKES:0'
score:       db 'SCORE: '
row1:        db 179,' 1 | 5 | 2 ',179,' 4 | 8 | 9 ',179,' 3 | 7 | 6 ',179
row2:        db 179,' 7 | 3 | 9 ',179,' 2 | 5 | 6 ',179,' 8 | 4 | 1 ',179
row3:        db 179,' 4 | 6 | 8 ',179,' 3 | 7 | 1 ',179,' 2 | 9 | 5 ',179
row4:        db 179,' 3 | 8 | 7 ',179,' 1 | 2 | 4 ',179,' 6 | 5 | 9 ',179
row5:        db 179,' 5 | 9 | 1 ',179,' 7 | 6 | 3 ',179,' 4 | 2 | 8 ',179
row6:        db 179,' 2 | 4 | 6 ',179,' 8 | 9 | 5 ',179,' 7 | 1 | 3 ',179
row7:        db 179,' 9 | 1 | 4 ',179,' 6 | 3 | 7 ',179,' 5 | 8 | 2 ',179
row8:        db 179,' 6 | 2 | 5 ',179,' 9 | 4 | 8 ',179,' 1 | 3 | 7 ',179
row9:        db 179,' 8 | 7 | 3 ',179,' 5 | 1 | 2 ',179,' 9 | 6 | 4 ',179


; Grid lines
line1:       db 218,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,191
line4:       db 195,'---',43,'---',43,'---',179,'---',43,'---',43,'---',179,'---',43,'---',43,'---',180  
line3:       db 195,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,180
lineE:       db 192,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,196,217  

;notes
notearr: times 729 db 0 ;1-9 space for each box out of 81 boxes so 9*81 bytes
currnote: dw 0
; Variables
var1:        dw 0
totalfilled: dw 81 ;all boxes filled intitally then randomize box decreases this number
entered:     dw 0
scorevar:    dw 0
delaycounter: dw 0     ; Add counter for implementing delay
seconds: dw 0
minutes: dw 0
oldISR: dd 0    ; Store old interrupt vector
; Clear screen subroutine
clrscr:
    push es
    push ax
    push cx
    push di
    mov ax, 0xb800
    mov es, ax
    xor di, di
    mov ax, 0x7020    ; Black background, white text, space character
    mov cx, 2000
    cld
	loopclr:
	stosw
	push 0x01
	call customdelay
	loop loopclr
    ;rep stosw
    pop di
    pop cx
    pop ax
    pop es
    ret

; Print string subroutine
printstr:
    push bp
    mov bp, sp
    push es
    push ax
    push cx
    push si
    push di
    mov ax, 0xb800
    mov es, ax
    mov al, 80
    mul byte [bp+10]
    add ax, [bp+12]
    shl ax, 1
    mov di, ax
    mov si, [bp+6]
    mov cx, [bp+4]
    mov ah, [bp+8]
    cld
nextchar:
    lodsb
    stosw
    loop nextchar
    pop di
    pop si
    pop cx
    pop ax
    pop es
    pop bp
    ret 10
	
	difficultymenu:
call clrscr
; mov ax, 31
    ; push ax
    ; mov ax, 4        ; Y position moved down
    ; push ax
    ; mov ax, 0x70
    ; push ax
    ; mov ax, diffch
    ; push ax
    ; push word [difficultylen]
    ; call printstr
mov ax,20
push ax
     mov ax, 0        ; Y position moved down
     push ax
     mov ax, 0x76
     push ax
     mov ax, diffascii1
     push ax
     push word [diffasciilen]
     call printstr

 mov ax,20
push ax
     mov ax, 1        ; Y position moved down
     push ax
     mov ax, 0x76
     push ax
     mov ax, diffascii2
     push ax
     push word [diffasciilen]
     call printstr

 mov ax,20
push ax
     mov ax, 2        ; Y position moved down
     push ax
     mov ax, 0x76
     push ax
     mov ax, diffascii3
     push ax
     push word [diffasciilen]
     call printstr

mov ax,20
push ax
     mov ax, 3        ; Y position moved down
     push ax
     mov ax, 0x76
     push ax
     mov ax, diffascii4
     push ax
     push word [diffasciilen]
     call printstr

 mov ax,20
push ax
     mov ax, 4        ; Y position moved down
     push ax
     mov ax, 0x76
     push ax
     mov ax, diffascii5
     push ax
     push word [diffasciilen]
     call printstr

 mov ax,20
push ax
     mov ax, 5        ; Y position moved down
     push ax
     mov ax, 0x76
     push ax
     mov ax, diffascii6
     push ax
     push word [diffasciilen]
     call printstr
	 
 mov ax,20
push ax
     mov ax, 6        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, diffascii7
     push ax
     push word [diffasciilen]
     call printstr


mov ax, 36
    push ax
    mov ax, 8       ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, diffch1
    push ax
mov ax,10
push ax
    call printstr

mov ax, 36
    push ax
    mov ax, 10         ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, diffch2
    push ax
mov ax,10
push ax
    call printstr

mov ax, 36
    push ax
    mov ax, 12        ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, diffch3
    push ax
mov ax,10
push ax
    call printstr

mov ax, 36
    push ax
    mov ax, 14        ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, diffch4
    push ax
mov ax,10
push ax
    call printstr

mov ax, 36
    push ax
    mov ax, 16       ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, diffch5
    push ax
mov ax,10
push ax
    call printstr

mov ax, 36
    push ax
    mov ax, 18        ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, diffch6
    push ax
mov ax,10
push ax
    call printstr
	
	push ax
	push es
	mov ax,0xb800
	mov es,ax
	mov word [es:1352],0x7431
	mov word [es:1672],0x7432
	mov word [es:1992],0x7433
	mov word [es:2312],0x7434
	mov word [es:2632],0x7435
	mov word [es:2952],0x7436
	
	pop es
	pop ax
	
repeatdiff:
mov ah,0
int 16h
cmp al,0x31
jl repeatdiff
cmp al,0x36
jg repeatdiff
cmp al,0x31
jne skipeasy
mov ax,43
skipeasy:
cmp al,0x32
jne skipmedium
mov ax,47
skipmedium:
cmp al,0x33
jne skiphard
mov ax,51
skiphard:
cmp al,0x34
jne skipexpert
mov ax,55
skipexpert:
cmp al,0x35
jne skipmaster
mov ax,59
skipmaster:
cmp al,0x36
jne skipextreme
mov ax,63
skipextreme:

ret

gameoverdisplay:
	call clrscr
	
	mov ax, 11
    push ax
    mov ax, 8        ; Y position moved down
    push ax
    mov ax, 0x04
    push ax
    mov ax, gameov1
    push ax
	mov ax,[gameovlen]
	push ax
    call printstr
	
	mov ax, 11
    push ax
    mov ax, 9        ; Y position moved down
    push ax
    mov ax, 0x04
    push ax
    mov ax, gameov2
    push ax
	mov ax,[gameovlen]
	push ax
    call printstr
	
	mov ax, 11
    push ax
    mov ax, 10        ; Y position moved down
    push ax
    mov ax, 0x04
    push ax
    mov ax, gameov3
    push ax
	mov ax,[gameovlen]
	push ax
    call printstr
	
	mov ax, 11
    push ax
    mov ax, 11        ; Y position moved down
    push ax
    mov ax, 0x04
    push ax
    mov ax, gameov4
    push ax
	mov ax,[gameovlen]
	push ax
    call printstr
	
	mov ax, 11
    push ax
    mov ax, 12        ; Y position moved down
    push ax
    mov ax, 0x04
    push ax
    mov ax, gameov5
    push ax
	mov ax,[gameovlen]
	push ax
    call printstr
	
	mov ax, 27
    push ax
    mov ax, 14        ; Y position moved down
    push ax
    mov ax, 0xf0
    push ax
    mov ax, continuemsg
    push ax
	mov ax,[message_len]
	push ax
    call printstr
	
	
	mov ah,0
	int 16h
	ret
	
	printnum:
push bp
 mov bp, sp
 push es
 push ax
 push bx
 push cx
 push dx
 push di
 mov ax, 0xb800
 mov es, ax ; point es to video base
 mov ax, [bp+4] ; load number in ax
 mov bx, 10 ; use base 10 for division
 mov cx, 0 ; initialize count of digits
nextdigit: mov dx, 0 ; zero upper half of dividend
 div bx ; divide by 10
 add dl, 0x30 ; convert digit into ascii value
 push dx ; save ascii value on stack
 inc cx ; increment count of values
 cmp ax, 0 ; is the quotient zero
 jnz nextdigit ; if no divide it again
 mov al, 80
 mul byte [bp+8] ; multiply with y position
 add ax, [bp+10] ; add x position
 shl ax, 1 ; turn into byte offset
 mov di,ax ; point di to required location
 nextpos:
 pop dx ; remove a digit from the stack
 mov dh, [bp+6] ; use normal attribute
 mov [es:di], dx ; print char on screen
 add di, 2 ; move to next screen location
 loop nextpos ; repeat for all digits on stack
 pop di
 pop dx
 pop cx
 pop bx
 pop ax
 pop es
 pop bp
 ret 8


grid_rows: dw 368, 688, 1008, 1328, 1648, 1968, 2288, 2608, 2928

seed: dw 12345   ; Define a seed value

randomizeboard:
push bp
mov bp,sp
    pusha
	mov word  [totalfilled],81
    mov cx, [bp+4]         ; Number of random positions to generate, ax value taken from difficulty menu originally 
    mov ax, 0xb800
    mov es, ax

repeatrandom:
    push cx
    
    ; Generate random row using seed
    mov ax, [seed]
    mov bx, 17259
    imul bx          ; Multiply seed with prime number
    add ax, 37       ; Add another prime
    mov [seed], ax   ; Save new seed
	
    xor dx, dx
    mov bx, 9
    div bx           ; Divide by 9, remainder in DX
    mov bl, dl       ; Store row index in bl (0-8)
    
    ; Get base position for the row
    mov al, bl
    mov bl, 2       ; Each entry in grid_rows is 2 bytes
    mul bl
    mov bx, ax
    mov di, [grid_rows + bx]  ; Get starting position for the row
    
    ; Generate random column using updated seed
    mov ax, [seed]
    mov bx, 13523
    imul bx          ; Different multiplier for column
    add ax, 53       ; Different prime number
    mov [seed], ax   ; Save new seed
    xor dx, dx
    mov bx, 9
    div bx           ; Divide by 9, remainder in DX
    mov bl, dl       ; Column index in bl (0-8)
    
    ; Calculate column offset
    mov al, bl
    mov bl, 8
    mul bl
    
    ; Add column offset to row position
    add di, ax
    
    ; Check if position is already empty
    cmp word [es:di], 0x7020
    je skip_position1    ; Skip if already empty
    
    ; Place empty space with attribute
    mov word [es:di], 0x7020
    sub word [totalfilled], 1
	jmp skip_position
	skip_position1: ;increases cx for an extra loop
pop cx
jmp repeatrandom ;does not decrease cx
skip_position:
    pop cx
    loop repeatrandom ;decreases cx
    
    popa
	pop bp
    ret 2
	
	
printnotebox:
pusha
mov ax,0xb800
mov es,ax
mov di,452
mov ah,0x70
mov al,196
mov cx,9
rep stosw
mov al,191
stosw
sub di,2
mov cx,3
mov al,179
 vert1:
 add di,160
   mov [es:di],ax
   
   loop vert1
   mov di,452
   sub di,2
   mov cx,3
   mov word [es:di],0x70DA
   vert2:
 add di,160
   mov [es:di],ax
   loop vert2
   add di,160
   mov al,192 ;217 right
   stosw
   mov al,196
mov cx,9
rep stosw
mov al,217 ;217 right
   stosw
popa
ret


printnote:
pusha

    mov ax, 67      
    push ax
    mov ax, 1     
    push ax
    mov ax, 0x1f    
    push ax
    mov ax, note0
    push ax
    push word 7
    call printstr

  
   mov ax, 68      
    push ax
    mov ax, 3        
    push ax
    mov ax, 0x78      
    push ax
    mov ax, notearr     ;[numarr+243]
	add ax,[currnote]
    push ax
     ; mov bx,ax
     ; mov byte [bx],'1'
    push word 1
    call printstr
   
     mov ax, 70      
    push ax
    mov ax, 3        
    push ax
    mov ax, 0x78      
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,1
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'2'
    push word 1
    call printstr
   
    mov ax, 72      
    push ax
    mov ax, 3        
    push ax
    mov ax, 0x78      
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,2
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'3'
    push word 1
    call printstr
	
	 mov ax, 68     
    push ax
    mov ax, 4       
    push ax
    mov ax, 0x78     
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,3
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'4'
    push word 1
    call printstr
	
	 mov ax, 70      
    push ax
    mov ax, 4        
    push ax
    mov ax, 0x78      
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,4
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'5'
    push word 1
    call printstr
	
	 mov ax, 72      
    push ax
    mov ax, 4        
    push ax
    mov ax, 0x78     
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,5 
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'6'
    push word 1
    call printstr
	
	 mov ax, 68      
    push ax
    mov ax, 5        
    push ax
    mov ax, 0x78      
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,6
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'7'
    push word 1
    call printstr
	
	 mov ax, 70      
    push ax
    mov ax, 5       
    push ax
    mov ax, 0x78      
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,7
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'8'
    push word 1
    call printstr
	
	 mov ax, 72     
    push ax
    mov ax, 5        
    push ax
    mov ax, 0x78     
    push ax
    mov ax, notearr
	add ax,[currnote]
	add ax,8
    push ax
     ; mov bx,ax
	 ; mov byte [bx],'9'
    push word 1
    call printstr
   
   popa
    ret

printmistake:
    mov ax, 7      
    push ax
    mov ax, 2        
    push ax
    mov ax, 0x70    
    push ax
    mov ax, mistakes
    push ax
    push word 10
    call printstr
    ret
printscore:
    mov ax, 7      
    push ax
    mov ax, 4        
    push ax
    mov ax, 0x70      
    push ax
    mov ax, score
    push ax
    push word 6
    call printstr
	
	mov ax,13  ;x
    push ax
    mov ax,4  ;y
    push ax
    mov ax,0x70   ;attribute
    push ax
 mov ax,[scorevar]
 push ax ; place number on stack
 call printnum ; call the printnum subroutine

 ret

play_sound:
    push ax
    push bx
    push cx
    push dx
    
    mov al, 182         ; Prepare speaker for tone
    out 43h, al
    
    mov ax, bx          ; Frequency value passed in BX
    out 42h, al         ; Low byte
    mov al, ah
    out 42h, al         ; High byte
    
    in al, 61h          ; Get speaker control value
    or al, 03h          ; Set bits 0-1
    out 61h, al         ; Turn speaker on
    
    mov cx, dx          ; Duration value passed in DX
delay_loop:
    push cx
    mov cx, 65535
delay_inner:
    loop delay_inner
    pop cx
    loop delay_loop
    
    in al, 61h          ; Get speaker control value
    and al, 0FCh        ; Clear bits 0-1
    out 61h, al         ; Turn speaker off
    
    pop dx
    pop cx
    pop bx
    pop ax
    ret
	;call playsound
make_beep:
    push bx            ; Save original BX value
    push dx            ; Save original DX value
    

    mov bx, 4000       ; First bright tone
    mov dx, 10
    call play_sound
    
    mov bx, 5000       ; Higher ascending tone
    mov dx, 5
    call play_sound
    
    mov bx, 6000       ; Highest piercing tone
    mov dx, 10
    call play_sound
    
    mov bx, 7000       ; Sharp resolution tone
    mov dx, 20
    call play_sound
    
    pop dx             ; Restore original DX value
    pop bx             ; Restore original BX value
    ret
	
; Display menu subroutine
display_menu:
 mov ax, 23        ; Center horizontally
    push ax
    mov ax, 3        ; Y position
    push ax
    mov ax, 0x70     ; Black on white for title
    push ax
    mov ax, menu_title0
    push ax
    push word 50
call printstr

    mov ax, 20        ; Center horizontally
    push ax
    mov ax, 4         ; Y position
    push ax
    mov ax, 0x79      ; Black on white for title
    push ax
    mov ax, menu_title1
    push ax
    push word 50

    call printstr
mov ax, 20        ; Center horizontally
    push ax
    mov ax, 5         ; Y position
    push ax
    mov ax, 0x79     ; Black on white for title
    push ax
    mov ax, menu_title2
    push ax
    push word 50

    call printstr
mov ax, 20        ; Center horizontally
    push ax
    mov ax, 6         ; Y position
    push ax
    mov ax, 0x79      ; Black on white for title
    push ax
    mov ax, menu_title3
    push ax
    push word 50
    call printstr

mov ax, 20        ; Center horizontally
    push ax
    mov ax, 7        ; Y position
    push ax
    mov ax, 0x79      ; Black on white for title
    push ax
    mov ax, menu_title4
    push ax
    push word 50
    call printstr

mov ax, 20        ; Center horizontally
     push ax
     mov ax, 8         ; Y position
     push ax
     mov ax, 0x79      ; Black on white for title
     push ax
     mov ax, menu_title5
     push ax
     push word 50
     call printstr

mov ax, 20        ; Center horizontally
    push ax
    mov ax, 9        ; Y position
    push ax
    mov ax, 0x79     ; Black on white for title
    push ax
    mov ax, menu_title6
    push ax
    push word 50
    call printstr

mov ax, 16        ; Center horizontally
    push ax
    mov ax, 10       ; Y position
    push ax
    mov ax, 0x70      ; Black on white for title
    push ax
    mov ax, menu_title7
    push ax
    push word 50
    call printstr

    mov ax, 34
    push ax
    mov ax, 12        ; Y position moved down
    push ax
    mov ax, 0x70
    push ax
    mov ax, menu_start
    push ax
    push word [start_len]
    call printstr

 mov ax, 34
    push ax
    mov ax, 14      ; Y position
    push ax
    mov ax, 0x70
    push ax
    mov ax, menu_instructions
    push ax
    push word [instruction_length]
    call printstr

    mov ax, 34
    push ax
    mov ax, 16        ; Y position
    push ax
    mov ax, 0x70
    push ax
    mov ax, menu_quit
    push ax
    push word [quit_len]
    call printstr
	push ax
	push es
	mov ax,0xb800
	mov es,ax
	mov word [es:1988],0x7431
	mov word [es:2308],0x7432
	mov word [es:2628],0x7433
	pop es
	pop ax
    ; mov ax, 26
    ; push ax
    ; mov ax, 18       ; Y position
    ; push ax
    ; mov ax, 0x70
    ; push ax
    ; mov ax, menu_prompt
    ; push ax
    ; push word [prompt_len]
    ; call printstr
    ret


; Display game board subroutine
display_game:
pusha
    call clrscr
	call printnotebox
	
    mov dx, 0
    mov ax, 35
    push ax
    push dx
    add dx, 1
    mov ax, 0x70
    push ax
    mov ax, message
    push ax
    push word [length]
    call printstr
    call printnote
    call printmistake
call printscore
push 0xFF
call customdelay
    mov ax, 22
    push ax
    push dx
    mov ax, 0x70
    push ax
    mov ax, line1
    push ax
    push word [boxlen]
    call printstr
   
    mov cx, 18
    mov bx, row1
    mov word [var1], 1
loop1:
    add dx, 1
    mov ax, 22
    push ax
    push dx
    mov ax, 0x70
    push ax
    test cx, 1
    jnz skip
    mov ax, bx
    add bx, [boxlen]
    jmp address
	
skip:
    mov ax, line4
    cmp word [var1], 6
    jne address
    mov ax, line3
    mov word [var1], 0
address:
    push ax
    push word [boxlen]
    call printstr
    add word [var1], 1
    dec cx
    cmp cx, 1
    jne loop1

    add dx, 1
    mov ax, 22
    push ax
    push dx
    mov ax, 0x70
    push ax
    mov ax, lineE
    push ax
    push word [boxlen]
    call printstr
   
    add dx, 1
    mov ax, 25
    push ax
    push dx
    mov ax, 0x71
    push ax
    mov ax, notes
    push ax
    push word [noteslen]
    call printstr
    popa
    ret

; Direction check subroutines
leftcheck:
    push bp
    mov bp, sp
    push ax
    push bx
    mov cx, 1
    mov ax, [bp+4]
    mov bl, 160
    div bl
    cmp byte ah, 48
    jg noleft
    mov cx, 0
noleft:
    pop bx
    pop ax
    pop bp
    ret 2

rightcheck:
    push bp
    mov bp, sp
    push ax
    push bx
    mov cx, 1
    mov ax, [bp+4]
    mov bl, 160
    div bl
    cmp byte ah, 112
    jl noright
    mov cx, 0
noright:
    pop bx
    pop ax
    pop bp
    ret 2

downcheck:
    push bp
    mov bp, sp
    push ax
    push bx
    mov cx, 1
    mov ax, [bp+4]
    mov bl, 160
    div bl
    cmp byte al, 18
    jl nodown
    mov cx, 0
nodown:
    pop bx
    pop ax
    pop bp
    ret 2

upcheck:
    push bp
    mov bp, sp
    push ax
    push bx
    mov cx, 1
    mov ax, [bp+4]
    mov bl, 160
    div bl
    cmp byte al, 3
    jg noup
    mov cx, 0
noup:
    pop bx
    pop ax
    pop bp
    ret 2

highlight:
push bp
mov bp,sp
; push di
; push ax
; push cx
; push bx
; push dx
pusha
mov di,368
mov si,[bp+4]
mov ax,[es:si]
cmp al,0x20
jz skipindividual
mov dx,9
outerloophighlight:
mov cx,9
innerloophighlight:
mov ax,[es:si]
mov bx,[es:di]
cmp al,bl
jnz skiphigh
mov ax,[es:di]
cmp ah,0x74
je redat
cmp ah,0x04
je redat
cmp ah,0x34
je redat
jmp nored
redat:
mov ah,0x34
mov [es:di],ax
mov ax,[es:di-2]
mov ah,0x34
mov [es:di-2],ax
mov ax,[es:di+2]
mov ah,0x34
mov [es:di+2],ax
jmp skiphigh
nored:
mov ah,0x30
mov [es:di],ax
mov ax,[es:di-2]
mov ah,0x30
mov [es:di-2],ax
mov ax,[es:di+2]
mov ah,0x30
mov [es:di+2],ax
skiphigh:
add di,8
loop innerloophighlight
add di,248
sub dx,1
jnz outerloophighlight
skipindividual:
mov di,[bp+4]
ver1:
mov ax,[es:di]
cmp ah,0x34
jz skipred1
cmp ah,0x74
jz skipred1
cmp ah,0x04
jz skipred1
mov ah,0x30
jmp p1
skipred1:
mov ah,0x34
p1:
mov [es:di],ax

mov ax,[es:di-2]
mov ah,0x30
mov [es:di-2],ax
mov ax,[es:di+2]
mov ah,0x30
mov [es:di+2],ax
add di,160
cmp di,2992
jle ver1

mov di,[bp+4]
ver2:
mov ax,[es:di]
cmp ah,0x34
jz skipred2
cmp ah,0x74
jz skipred2
cmp ah,0x04
jz skipred2
mov ah,0x30
jmp p2
skipred2:
mov ah,0x34
p2:
mov [es:di],ax

mov ax,[es:di-2]
mov ah,0x30
mov [es:di-2],ax
mov ax,[es:di+2]
mov ah,0x30
mov [es:di+2],ax
sub di,160
cmp di,368
jge ver2

mov cx,33
mov di,[bp+4]
hor1: ;114 max di
mov ax,[es:di]
cmp ah,0x34
jz skipred3
cmp ah,0x74
jz skipred3
cmp ah,0x04
jz skipred3
mov ah,0x30
jmp p3
skipred3:
mov ah,0x34
p3:

mov [es:di],ax
add di,2
mov ax,di
mov dx,0
mov bx,320
div bx
cmp dx,116
jnz hor1

mov cx,33
mov di,[bp+4]
hor2: ;114 max di
mov ax,[es:di]
cmp ah,0x34
jz skipred4
cmp ah,0x74
jz skipred4
cmp ah,0x04
jz skipred4
mov ah,0x30
jmp p4
skipred4:
mov ah,0x34
p4:
mov [es:di],ax
sub di,2
mov ax,di
mov dx,0
mov bx,320
div bx
cmp dx,44
jnz hor2
popa
; pop dx
; pop bx
; pop cx
; pop ax
; pop di
pop bp
ret 2

boxcheck:
push bp
mov bp,sp
pusha
mov word [var1],0
 mov ax,[bp+4]
 mov dx,0
  mov bx,320
  div bx
  sub dx,48
  sub ax,1
  xchg dx,ax
  ;dx contains row
  mov ah,0
  mov bx,24
  div bl
  ;al contains quotient
  mov ah,0
  add ax,1
  mov bx,ax ;bx contains column
  mov ax,dx
  mov dx,bx;dx contains column
  mov bx,3
  div bl
  mov ah,0
  add ax,1 

;ax contains row

mov di,368
mov cx,ax
sub cx,1
locrcheck:
add di,960
loop locrcheck

mov cx,dx
sub cx,1
loccheck:
add di,24
loop loccheck

mov ax,0xb800
mov es,ax
mov bx,[bp+6]
mov bh,0
mov dx,3
mov cx,3

 boxpoutcheck:

  boxpcheck:
  mov ax,[es:di]
  cmp al,bl
  jne skipinc5
  add word [var1],1
  skipinc5:
  add di,8
  loop boxpcheck
  
 mov cx,3
 add di,296
 sub dx,1
 jnz boxpoutcheck

popa
pop bp

ret 4

checkin:
push bp
mov bp,sp
pusha

mov di,[bp+4]
mov cx,[bp+6]

mov word [var1],0
ver1check:
mov ax,[es:di]
cmp cl,al
jne skipinc1
add word [var1],1
skipinc1:
add di,160
cmp di,2992
jle ver1check

mov di,[bp+4]
ver2check:
mov ax,[es:di]
cmp cl,al
jne skipinc2
add word [var1],1
skipinc2:
sub di,160
cmp di,368
jge ver2check


mov di,[bp+4]

hor1check: ;116 max di
mov ax,[es:di]
cmp cl,al
jne skipinc3
add word [var1],1
skipinc3:
add di,8
mov ax,di
mov dx,0
mov bx,320
div bx
cmp dx,112
jl hor1check


 mov di,[bp+4]
 hor2check: ;44 min di
 mov ax,[es:di]
 cmp cl,al
 jne skipinc4
 add word [var1],1
 skipinc4:
 sub di,8
 mov ax,di
 mov dx,0
 mov bx,320
 div bx
 cmp dx,48
 jg hor2check
popa
pop bp
ret 4

clearboardcolor:
push di
push ax
push cx
push dx
push si
mov si,366
mov dx,18 ;rows
clearboard1:
mov cx,35 ;columns
mov di,si
add si,160
clearboard2:
mov ax,[es:di]
cmp ah,0x34
jz skipred6
cmp ah,0x74
jz skipred6
cmp ah,0x04
jz skipred6
mov ah,0x70
jmp p6
skipred6:
mov ah,0x74
p6:
mov [es:di],ax
add di,2
loop clearboard2
dec dx
jnz clearboard1
pop si
pop dx
pop cx
pop ax
pop di
ret
customdelay:
    push bp         ; Save base pointer
    mov bp, sp      ; Set up stack frame
    
    pusha         ; Save BX register
    
    mov cx, [bp+4]  ; Get delay parameter from stack

delayOuterLoop:
    mov bx, 0xFF    ; Inner loop counter
delayInnerLoop:
    dec bx          ; Decrement inner loop counter
    jnz delayInnerLoop   ; Repeat inner loop if not zero

    dec cx          ; Decrement outer loop counter
    jnz delayOuterLoop   ; Repeat outer loop if not zero

   popa        ; Restore AX
    mov sp, bp      ; Restore stack pointer
    pop bp          ; Restore base pointer
    ret 2 
goldboardcolor:
pusha
mov bx,0
mov ax,0xb800
mov es,ax
mov si,366
mov dx,17 ;rows
goldboard1:
mov cx,35 ;columns
mov di,si
add si,160
goldboard2:
cmp bx,0
jnz skipdelay
push 0x88
call customdelay
skipdelay:
mov ax,[es:di]
mov ah,0x13
mov [es:di],ax
add di,2
loop goldboard2
add bx,1
push word 0xff
call customdelay
dec dx
jnz goldboard1
push 0xFF
call customdelay


mov si,366
mov dx,17 ;rows
goldboard3:
mov cx,35 ;columns
mov di,si
add si,160
goldboard4:
cmp bx,0
mov ax,[es:di]
;mov ax,0x99db
mov ah,0x93
mov [es:di],ax
add di,2
loop goldboard4
add bx,1
dec dx
jnz goldboard3

mov ax, 28
    push ax
    mov ax, 10        ; Y position moved down
    push ax
    mov ax, 0xff
    push ax
    mov ax, continuemsg
    push ax
	mov ax,[message_len]
	push ax
    call printstr


popa
ret

boxHighlight:
push bp
mov bp,sp
pusha

 mov ax,[bp+4]
 mov dx,0
  mov bx,320
  div bx
  sub dx,48
  sub ax,1
  xchg dx,ax
  ;dx contains row
  mov ah,0
  mov bx,24
  div bl
  ;al contains quotient
  mov ah,0
  add ax,1
  mov bx,ax ;bx contains column
  mov ax,dx
  mov dx,bx;dx contains column
  mov bx,3
  div bl
  mov ah,0
  add ax,1 

;ax contains row

mov di,366
mov cx,ax
sub cx,1
locr:
add di,960
loop locr
mov cx,dx
sub cx,1
locc:
add di,24
loop locc

mov ax,0xb800
mov es,ax
mov dx,5
boxpout:
mov bx,di
mov cx,11
boxp:
mov ax,[es:di]
cmp ah,0x34
jz skipred5
cmp ah,0x74
jz skipred5
cmp ah,0x04
jz skipred5
mov ah,0x30
jmp p5
skipred5:
mov ah,0x34
p5:
mov [es:di],ax
add di,2
loop boxp
mov di,bx
add di,160
dec dx
jnz boxpout

popa
pop bp

ret 2

timer:

    push ax
    push dx            
    push cx
    cmp word [minutes],5
	je skipcount
    ; Add delay counter
    mov cx, [cs:delaycounter]
    inc cx
    mov [cs:delaycounter], cx
    
    cmp cx, 18        ; Only increment second every 18 ticks (approximately 1 second)
    jne skipcount
    
    mov word [cs:delaycounter], 0    ; Reset delay counter
    inc word [cs:seconds]          ; Increment tick count
	cmp word [cs:seconds],60
	jl skipmin
	mov word [cs:seconds],0
	add word [cs:minutes],1
	mov ax,41
	push ax
    mov ax,0 ;y
    push ax
    mov ax,0x74   ;attribute
    push ax
     push word [cs:minutes] ; place number on stack
	call printnum ; call the printnum subroutine

	mov ax,43
	push ax
    mov ax,0 ;y
    push ax
    mov ax,0x74   ;attribute
    push ax
     push word [cs:seconds] ; place number on stack
	call printnum ; call the printnum subroutine
	
	mov ax,44
	push ax
    mov ax,0 ;y
    push ax
    mov ax,0x74   ;attribute
    push ax
     push word [cs:seconds] ; place number on stack
	call printnum ; call the printnum subroutine
	
	cmp word [minutes],5
	jne skipcount
	 mov ax, 32
    push ax
    mov ax,10
	push ax
    mov ax, 0xE0
    push ax
    mov ax, timeEnd
    push ax
	mov ax,17
    push ax
    call printstr
	
	;jmp skipcount
	skipmin:
	  mov ax,43  ;x position
      cmp word [cs:seconds],9
      jg skipsec
      add ax,1
      mov word [es:86],0x7430
      skipsec:
  
    push ax
    mov ax,0 ;y
    push ax
    mov ax,0x74   ;attribute
    push ax
     push word [cs:seconds] ; place number on stack
	call printnum ; call the printnum subroutine

   
skipcount:
    mov al, 0x20
    out 0x20, al       ; End of interrupt
    pop cx
    pop dx             
    pop ax
    iret
	
checkcompletion:
push bp
mov bp,sp
pusha
mov di,[bp+4]
mov word [var1],0
ver1compcheck:
mov ax,[es:di]
cmp al,0x20
je skipinccomp1
cmp ah,0x34
je skipinccomp1
cmp ah,0x04
je skipinccomp1
cmp ah,0x74
je skipinccomp1
add word [var1],1
skipinccomp1:
add di,320
cmp di,2992
jle ver1compcheck

mov di,[bp+4]
ver2compcheck:
mov ax,[es:di]
cmp al,0x20
je skipinccomp2
cmp ah,0x34
je skipinccomp2
cmp ah,0x04
je skipinccomp2
cmp ah,0x74
je skipinccomp2
add word [var1],1
skipinccomp2:
sub di,320
cmp di,368
jge ver2compcheck
mov si,di
cmp word [var1],10
jl skipcolcomp
; mov ax, 0        ; Center horizontally
    ; push ax
    ; mov ax, 0      ; Y position
    ; push ax
    ; mov ax, 0x70      ; Black on white for title
    ; push ax
    ; mov ax, columncompleted
    ; push ax
    ; push word 19
    ; call printstr
	mov cx,17
	mov di,si
	add di,320
	call clearboardcolor
	colcomphigh:
	mov ax,[es:di]
	mov ah,0x10
	mov [es:di],ax
	mov word [es:di-2],0x1020
	mov word [es:di+2],0x1020
	add di,160
	push 0xff
	call customdelay
	loop colcomphigh
	call make_beep
    push 0xff
	call customdelay
	
	
skipcolcomp:

mov di,[bp+4]
mov word [var1],0

hor1compcheck: ;112 max di
mov ax,[es:di]
cmp al,0x20
je skipinccomp3
cmp ah,0x34
je skipinccomp3
cmp ah,0x04
je skipinccomp3
cmp ah,0x74
je skipinccomp3
add word [var1],1
skipinccomp3:
add di,8
mov ax,di
mov dx,0
mov bx,320
div bx
cmp dx,112
jle hor1compcheck

 mov di,[bp+4]
 hor2compcheck: ;44 min di
 mov ax,[es:di]
 cmp al,0x20
 je skipinccomp4
 cmp ah,0x34
je skipinccomp4
cmp ah,0x04
je skipinccomp4
cmp ah,0x74
je skipinccomp4
 add word [var1],1
 skipinccomp4:
 sub di,8
 mov ax,di
 mov dx,0
 mov bx,320
 div bx
 cmp dx,48
 jge hor2compcheck
cmp word [var1],10
jl skiprowcomp
    ;call clearboardcolor
	mov cx,35
	add di,6
	rowcomphigh:
	mov ax,[es:di]
	mov ah,0x10
	stosw
	push 0xff
	call customdelay
	loop rowcomphigh
	
	call make_beep
	
skiprowcomp:
mov word [var1],0

popa
pop bp
ret 2	
	
	
enternote:
pusha
   mov ax, 61
    push ax
    mov ax,7
	push ax
    mov ax, 0xF0
    push ax
    mov ax, note1
    push ax
    push word [note1len]
    call printstr
enteragain:
mov ah,0
int 16h
cmp al,'1'
jl enteragain
cmp al,'9'
jg enteragain
mov ah,0
mov si,ax ;si contains the note added 1-9
mov bx,notearr    
add bx,[currnote] ;[notearr+6]
cmp byte [bx+si-0x31],0x20 ;55-49=6
je skipmovespace
mov byte [bx+si-0x31],0x20 ;if number already there then remove it
jmp clearnotemsg
skipmovespace:
mov [bx+si-0x31],al

clearnotemsg:
    mov ax, 61
    push ax
    mov ax,7
	push ax
    mov ax, 0x77
    push ax
    mov ax, note1
    push ax
    push word [note1len]
    call printstr
	
popa
ret

gamewon:
call goldboardcolor
		mov ah,0
		int 16h

 call clrscr
     mov ax, 33
     push ax
     mov ax, 2
     push ax
     mov ax, 0xF1
     push ax
     mov ax, trophy
     push ax
     push word [trophy_len]
     call printstr


     mov ax, 33
     push ax
     mov ax, 3
     push ax
     mov ax, 0xF2
     push ax
     mov ax, trophy_0
     push ax
     push word [trophy_len]
     call printstr



     mov ax, 33
     push ax
     mov ax, 4
     push ax
     mov ax, 0xFC
     push ax
     mov ax, trophy_1
     push ax
     push word [trophy_len]
     call printstr



     mov ax, 33
     push ax
     mov ax, 5
     push ax
     mov ax, 0xFA
     push ax
     mov ax, trophy_2
     push ax
     push word [trophy_len]
     call printstr

 
     mov ax, 33
     push ax
     mov ax, 6
     push ax
     mov ax, 0xFB
     push ax
     mov ax, trophy_3
     push ax
     push word [trophy_len]
     call printstr

 
     mov ax, 33
     push ax
     mov ax, 7
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_4
     push ax
     push word [trophy_len]
     call printstr


     mov ax, 33
     push ax
     mov ax, 8
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_5
     push ax
     push word [trophy_len]
     call printstr

     mov ax, 33
     push ax
     mov ax, 9
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_6
     push ax
     push word [trophy_len]
     call printstr

     mov ax, 33
     push ax
     mov ax, 10
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_7
     push ax
     push word [trophy_len]
     call printstr

     mov ax, 33
     push ax
     mov ax, 11
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_8
     push ax
     push word [trophy_len]
     call printstr

     mov ax, 33
     push ax
     mov ax, 12
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_9
     push ax
     push word [trophy_len]
     call printstr

     mov ax, 33
     push ax
     mov ax, 13
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_10
     push ax
     push word [trophy_len]
     call printstr

     mov ax, 33
     push ax
     mov ax, 14
     push ax
     mov ax, 0x70
     push ax
     mov ax, trophy_11
     push ax
     push word [trophy_len]
     call printstr


     mov ax, 27
     push ax
     mov ax, 16
     push ax
     mov ax, 0x70
     push ax
     mov ax, end_message1
     push ax
     push word [end_len]
     call printstr

     ; mov ax, 27
     ; push ax
     ; mov ax, 17
     ; push ax
     ; mov ax, 0x70
     ; push ax
     ; mov ax, end_message2
     ; push ax
     ; push word [end_len1]
     ; call printstr

mov ax, 31
     push ax
     mov ax, 19
     push ax
     mov ax, 0x70
     push ax
     mov ax, score_text
     push ax
     push word [score_len]
     call printstr

     mov ax,44 ;x
     push ax
     mov ax,19  ;y
     push ax
     mov ax,0x74   ;attribute
     push ax
     mov ax,[scorevar]
     push ax ; place number on stack
     call printnum ; call the printnum subroutine\
	 
	 mov word [scorevar],0
     mov ax, 29
     push ax
     mov ax, 18
     push ax
     mov ax, 0x74
     push ax
     mov ax, time_text
     push ax
     push word [time_len]
     call printstr
	 
	 mov ax, 29
     push ax
     mov ax, 18
     push ax
     mov ax, 0x70
     push ax
     mov ax, time_text
     push ax
     push word 16
     call printstr
	 
	 mov ax,46 ;x
     push ax
     mov ax,18  ;y
     push ax
     mov ax,0x74   ;attribute
     push ax
     mov ax,[minutes]
     push ax ; place number on stack
     call printnum ; call the printnum subroutine\
	 
	  
	 mov ax,48 ;x
	 cmp word [seconds],9
	 jg skipmove
	 add ax,1
	 skipmove:
     push ax
     mov ax,18  ;y
     push ax
     mov ax,0x74   ;attribute
     push ax
     mov ax,[seconds]
     push ax ; place number on stack
     call printnum ; call the printnum subroutine\
	 
	 ; mov ax, 27
    ; push ax
    ; mov ax, 21       ; Y position moved down
    ; push ax
    ; mov ax, 0xf0
    ; push ax
    ; mov ax, continuemsg
    ; push ax
	; mov ax,[message_len]
	; push ax
    ; call printstr
	
	 mov ah,0
	 int 16h
	 ret
	 
	 customtimer:
	 add word [seed],997 ;random prime number
	 mov al,0x20  
	 out 0x20,al
	 iret
	 
; Game play subroutine
play:

    pusha
	mov cx,729
	mov di,0
	clearnotes: ;sets all notes to 0
	mov byte [notearr+di],0x20
	add di,1
	loop clearnotes
	mov word [seconds],0
	mov word [minutes],0
	mov word [scorevar],0
	mov word [currnote],0
    mov di, 368
    mov ax, 0xb800
    mov es, ax
    mov dx, [es:di]
	push di
    call highlight
	push di 
	call boxHighlight
	
pr:
  
   ; call make_beep
    call printscore
	call printnote
    cmp word [totalfilled],81
	jge displaywin
    mov dx, [es:di]
	cmp dh,0x34
    jz skipred7
    cmp dh,0x74
    jz skipred7
    cmp dh,0x04
    jz skipred7
    mov dh,0x0f
    jmp p7
    skipred7:
    mov dh,0x04
    p7:
    mov word [es:di], dx
	cmp word [minutes],5
	jge endgame
    call get_key
	cmp al,'n'
	jnz skipnote
	call enternote
		jmp pr
	skipnote:
cmp al ,'u'
jne skipundo
cmp word [entered],1
jl pr
mov dx,[es:di]
cmp dh,0x04
jne skipredcyan
mov dh,0x34
jmp completeundo
skipredcyan:
mov dh,0x30
completeundo:
mov [es:di],dx
pop dx
mov [currnote],dx
pop di
pop dx
mov [es:di],dx
sub word [entered],1
call clearboardcolor
    push di
    call highlight
	push di 
	call boxHighlight
jmp pr

skipundo:
    cmp ah, 72 
    jne up
    push di
    call upcheck
    cmp cx, 1
    jne pr
   ; mov dh, 0x70
    mov word [es:di], dx
    sub di, 320
	sub word [currnote],81
    call clearboardcolor
	 push di
    call highlight
	push di 
	call boxHighlight
	jmp pr
up:

    cmp ah, 75
    jne left
    push di
    call leftcheck
    cmp cx, 1
    jne pr
   ; mov dh, 0x70
    mov word [es:di], dx
    sub di, 8
	sub word [currnote],9
    call clearboardcolor
    push di
    call highlight
	push di 
	call boxHighlight
	jmp pr
left:

    cmp ah, 80
    jne down
   ; mov dh, 0x70
    push di
    call downcheck
    cmp cx, 1
    jne pr
    mov word [es:di], dx
    add di, 320
	add word [currnote],81
    call clearboardcolor
    push di
    call highlight
	push di 
	call boxHighlight
	jmp pr
down:

    cmp ah, 77
    jne right
    push di
    call rightcheck
    cmp cx, 1
    jne pr
   ; mov dh, 0x70
    mov word [es:di], dx
    add di, 8
	add word [currnote],9
    call clearboardcolor
    push di
    call highlight
	push di 
	call boxHighlight
	jmp pr
right:
    mov cx,[es:di]
	cmp ch,0x04
	je insert
 	cmp word[es:di],0x0f20
    jne pr	
	cmp al,0x30
	jl pr
	cmp al,0x39
	jg pr
	insert:
	cmp al,0x30
	jl pr
	cmp al,0x39
	jg pr
	add word [entered],1
	push word [es:di] ;push on stack for undo if used
	push word di
	push word [currnote]
    mov ah,0x70
	mov [es:di],ax
	add word [totalfilled],1
	add word [scorevar],400
	mov ah,0
	push ax
	 push di
	 call boxcheck
	 cmp word [var1],1
	 jg incmistake
	
	push ax
	push di
	call checkin
	cmp word [var1],4
	jle completecheckpre
	jmp incmistake
	completecheckpre:
	push di
   call checkcompletion
   jmp pr
	;increase mistake 
	incmistake:
	add byte [mistakes+9],1
	sub word [scorevar],400
	sub word [totalfilled],1
	mov ah,0x04
	mov[es:di],ax
	call printmistake
	;Check mistakes
	cmp byte [mistakes+9],0x33
	jg endgame
    jmp pr
	displaywin:
	 push es
    xor ax, ax
    mov es, ax
    cli
    mov ax, [oldISR]
    mov [es:8*4], ax
    mov ax, [oldISR+2]
    mov [es:8*4+2], ax
    sti
    pop es
	call gamewon
	jmp wonend
		endgame:
		push es
    xor ax, ax
    mov es, ax
    cli
    mov ax, [oldISR]
    mov [es:8*4], ax
    mov ax, [oldISR+2]
    mov [es:8*4+2], ax
    sti
    pop es
		call gameoverdisplay
		wonend:
		
		mov cx,[entered]
		popback: ;discard all the excess pushed values
		pop ax
		pop ax
		pop ax
		sub word [entered],1
		loop popback
		;call lost screen 
		mov byte [mistakes+9],0x30
   popa
 ret



; Wait for key input
get_key:
    mov ax, 0
    int 0x16
    ret
displayinstruction:
pusha
call clrscr

     mov ax,5
push ax
     mov ax, 0        ; Y position moved down
     push ax
     mov ax, 0xf4
     push ax
     mov ax, inst1
     push ax
     push word [instlen]
     call printstr
	 
	   mov ax,5
push ax
     mov ax, 0        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst1
     push ax
     push word 50
     call printstr

mov ax,5
push ax
     mov ax, 1        ; Y position moved down
     push ax
     mov ax, 0xf4
     push ax
     mov ax, inst2
     push ax
     push word [instlen]
     call printstr
	 
 mov ax,5
push ax
     mov ax, 1        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst2
     push ax
     push word 49
     call printstr

 mov ax,5
push ax
     mov ax, 2        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst3
     push ax
     push word [instlen]
     call printstr


mov ax,5
push ax
     mov ax, 3        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst4
     push ax
     push word [instlen]
     call printstr

 mov ax,5
push ax
     mov ax, 4        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst5
     push ax
     push word [instlen]
     call printstr

 mov ax,5
push ax
     mov ax, 5        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst6
     push ax
     push word [instlen]
     call printstr
 mov ax,5
push ax
     mov ax, 6       ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, insta22
     push ax
     push word [instlen]
     call printstr

 mov ax,5
push ax
     mov ax, 8        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst67
     push ax
     push word 40
     call printstr

 mov ax,5
push ax
     mov ax, 9        ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst7
     push ax
     push word 49
     call printstr

mov ax,5
push ax
     mov ax, 10        ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst8
     push ax
     push word 49
     call printstr

mov ax,5
push ax
     mov ax, 11        ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst9
     push ax
     push word 49
     call printstr

mov ax,5
push ax
     mov ax, 12       ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst10
     push ax
     push word 49
     call printstr

mov ax,5
push ax
     mov ax, 15        ; Y position moved down
     push ax
     mov ax, 0x70
     push ax
     mov ax, inst11
     push ax
     push word 49
     call printstr

 mov ax,5
push ax
     mov ax, 16        ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst12
     push ax
     push word 49
     call printstr

 mov ax,5
push ax
     mov ax, 17        ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst13
     push ax
     push word 49
     call printstr

 mov ax,5
push ax
     mov ax, 18       ; Y position moved down
     push ax
     mov ax, 0x74
     push ax
     mov ax, inst14
     push ax
     push word 49
     call printstr

    push ax
	push es
	mov ax,0xb800
	mov es,ax
	mov word [es:1450],0x702D
	mov word [es:1610],0x702D
	mov word [es:1770],0x702D
	mov word [es:1930],0x702D
	mov word [es:2570],0x702D
	mov word [es:2730],0x702D
	mov word [es:2890],0x702D
	
	pop es
	pop ax

mov ah,0
int 16h

popa


start:
    call clrscr
	 xor ax, ax
    mov es, ax
    mov ax, [es:8*4]
    mov [oldISR], ax
    mov ax, [es:8*4+2]
    mov [oldISR+2], ax
	
	 cli                  ; Disable interrupts
     mov word [es:8*4], customtimer
     mov [es:8*4+2], cs
     sti 
	 
    call display_menu

menu_loop:
    call get_key
    cmp al, '1'
    je start_game
	cmp al, '2'
    je displayinstruction
    cmp al, '3'
    je exit_game
    jmp menu_loop

start_game:
   call difficultymenu
   call display_game
	push ax
	call randomizeboard
    xor ax,ax
    mov es,ax
     cli                  ; Disable interrupts
     mov word [es:8*4], timer
     mov [es:8*4+2], cs
     sti 
	 
   call play
   
    jmp start

exit_game:
    call clrscr
    mov ax, 0x4c00
    int 0x21
