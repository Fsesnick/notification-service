import { IsNotEmpty, IsUUID, Length } from "class-validator";
export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @Length(5, 248)
    content: string;
    category: string
}